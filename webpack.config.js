const path = require('path')
const webpack = require('webpack')
const moment = require('moment')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./config.js')

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
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname),
      'assets': path.resolve(__dirname, 'assets')
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
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]?[hash]',
              limit: 8192
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
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      'assets/**/*',
      'static/'
    ]),
    new webpack.DefinePlugin({
      'TIMESTAMP': JSON.stringify(moment().format('YYYY-MM-DD HH:mm:ss')),
      'COMMITHASH': JSON.stringify('unknown'),
      'VERSION': JSON.stringify('unknown')
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
      importWorkboxFrom: process.env.NODE_ENV === 'development' ? 'cdn' : 'local', // Bug, tracked here https://github.com/GoogleChrome/workbox/issues/1338
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/index.html',
      exclude: [/\.map$/, /^manifest.*\.js$/, '_redirects', '_headers'],
      runtimeCaching: [
        {
          urlPattern: new RegExp('^' + config.scheduleUrl.replace('.', '\\.')),
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
