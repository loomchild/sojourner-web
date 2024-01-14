const path = require('path')
const webpack = require('webpack')
const moment = require('moment')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetPlugin = require('add-asset-webpack-plugin')
const config = require('./config')

const gitRevisionPlugin = new GitRevisionPlugin()

const dotenv = require('dotenv')
dotenv.config()

const ICON_SIZES = [56, 112, 192, 224, 512]

const manifest = () => JSON.stringify({
  id: 'sojourner',
  short_name: 'Sojourner',
  name: `Sojourner - ${config.conference.name} Conference Companion`,
  description: `Sojourner is a ${config.conference.name} conference companion progressive web app (PWA).`,
  icons: ICON_SIZES.map(size => ({
    src: `/assets/sojourner-icon-app-${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png',
    purpose: 'maskable any'
  })),
  start_url: '/',
  scope: `https://${config.conference.id}.sojourner.rocks',
  display: 'standalone',
  orientation: 'portrait',
  background_color: config.colors.primary.base,
  theme_color: config.colors.primary.base,
  categories: ['utilities', 'education', 'social'],
  lang: 'en',
  dir: 'ltr'
}, null, 2)

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js',
    devtoolModuleFilenameTemplate: info => info.resourcePath.match(/^\.\/\S*?\.vue$/)
      ? `webpack-generated:///${info.resourcePath}?${info.hash}`
      : `webpack-code:///${info.resourcePath}`,
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname),
      assets: path.resolve(__dirname, 'assets')
    }
  },
  mode: 'development',
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
        }
      },
      {
        test: /preload\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /preload\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192,
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      'static/',
      'assets/*'
    ]),
    new AddAssetPlugin('assets/manifest.json', manifest),
    new webpack.EnvironmentPlugin({
      TIMESTAMP: moment().format('YYYY-MM-DD HH:mm:ss'),
      COMMITHASH: gitRevisionPlugin.commithash(),
      VERSION: process.env.npm_package_version,
      SCHEDULE_INTERVAL: 0,
      ROOM_STATE_URL: '',
      ROOM_STATE_INTERVAL: 0,
      ANALYTICS_URL: '',
      SENTRY_DSN: '',
      FIREBASE_API_KEY: undefined,
      FIREBASE_AUTH_DOMAIN: undefined,
      FIREBASE_DATABASE_URL: undefined,
      FIREBASE_PROJECT_ID: undefined,
      FIREBASE_STORAGE_BUCKET: undefined,
      FIREBASE_MESSAGING_SENDER_ID: undefined
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new GenerateSW({
      cacheId: 'sojourner',
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/index.html',
      exclude: [/\.map$/, /^manifest.*\.js$/, '_redirects', '_headers'],
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://firebasestorage\\.googleapis\\.com/v0/b/sojourer-web\\.appspot\\.com/o/conferences%2F.*\\.json\\?alt=media$'),
          handler: 'StaleWhileRevalidate',
          options: {
            broadcastUpdate: {
              channelName: 'workbox'
            }
          }
        }
      ]
    })
  ]
}

if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.output.filename = '[name].[contenthash].js'
  module.exports.devtool = 'source-map'
  module.exports.optimization = {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        styles: {
          name: 'preload',
          test: /preload\.css$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name (module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
