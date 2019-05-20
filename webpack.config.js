const path = require('path')
const webpack = require('webpack')
const moment = require('moment')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const chrome = require('chrome-aws-lambda')

module.exports = async () => {
  const config = {
    context: path.resolve(__dirname, './src'),
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename: 'build.js?[hash]',
      devtoolModuleFilenameTemplate: info => info.resourcePath.match(/^\.\/\S*?\.vue$/)
        ? `webpack-generated:///${info.resourcePath}?${info.hash}`
        : `webpack-code:///${info.resourcePath}`,
      devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
          }
        },
        {
          test: /\.css$/,
          use: [ 'vue-style-loader', 'css-loader' ]
        },
        {
          test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]'
          }
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
        'assets/**/*'
      ]),
      new webpack.DefinePlugin({
        'TIMESTAMP': JSON.stringify(moment().format('YYYY-MM-DD HH:mm:ss'))
      }),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled'
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  }

  if (process.env.NODE_ENV === 'test') {
    config.devtool = 'inline-source-map'
  }

  if (process.env.NODE_ENV === 'production') {
    config.mode = 'production'
    config.output.filename = 'build.js'
    config.devtool = 'source-map'
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new GenerateSW({
        cacheId: 'sojourner',
        globDirectory: 'dist/',
        globPatterns: ['**/*.{html,js,css,png,jpg,svg,ttf,eot,woff,woff2}'],
        swDest: path.join('service-worker.js'),
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 5000000,
        runtimeCaching: []
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/tracks', '/rooms', '/search', '/favourites', '/map', '/settings', '/about'],
        renderer: new Renderer({
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: true,
          renderAfterDocumentEvent: 'render-event'
        })
      })
    ])
  }

  return config
}
