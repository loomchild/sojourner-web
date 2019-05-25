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

const PRERENDER_ROUTES = [
  '/', '/tracks', '/rooms', '/search', '/favourites', '/map', '/settings', '/about',
  '/track', '/room', '/event', '/building'
]

module.exports = {
  context: path.resolve(__dirname, '.'),
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
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname),
      'assets': path.resolve(__dirname, 'assets')
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
      'assets/**/*',
      'static/'
    ]),
    new webpack.DefinePlugin({
      'TIMESTAMP': JSON.stringify(moment().format('YYYY-MM-DD HH:mm:ss'))
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      template: 'index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.output.filename = 'build.js'
  module.exports.devtool = 'source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: PRERENDER_ROUTES,
      postProcess (renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute
        return renderedRoute
      },
      renderer: new Renderer({
        headless: true,
        renderAfterDocumentEvent: 'render-event',
        defaultViewport: {
          width: 375,
          height: 667
        }
      })
    }),
    new GenerateSW({
      cacheId: 'sojourner',
      importWorkboxFrom: 'local',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/, /^manifest.*\.js$/, '_redirects'],
      runtimeCaching: PRERENDER_ROUTES.map(route => ({
        urlPattern: new RegExp(route + '/?'),
        handler: 'CacheFirst'
      }))
    })
  ])
}
