const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai-string', 'chai-datetime', 'sinon-chai'],
    reporters: ['spec'],
    files: [
      { pattern: 'test/**/*.test.js', watched: false }
    ],
    preprocessors: {
      'test/**/*.test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    authWatch: false
  })
}
