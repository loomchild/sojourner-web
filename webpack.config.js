const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './build.js?[hash]'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
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
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      'assets/**/*'
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new WorkboxPlugin({
      cacheId: 'sojourner',
      globDirectory: 'dist/',
      globPatterns: ['**/*.{html,js,css,png,jpg,svg}'],
      swDest: path.join('dist', 'service-worker.js'),
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {urlPattern: '(.*)material-design-icons-iconfont(.*)', handler: 'cacheFirst'},
        {urlPattern: '(.*)typeface-roboto(.*)', handler: 'cacheFirst'}
      ]
    })
  ])
}
