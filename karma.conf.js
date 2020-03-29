process.env.CHROME_BIN = require('puppeteer').executablePath()

const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    frameworks: ['mocha', 'chai-string', 'chai-datetime', 'sinon-chai'],
    reporters: ['spec'],
    files: [
      { pattern: 'test/unit/*.test.js', watched: false },
      { pattern: 'test/unit/**/*.test.js', watched: false }
    ],
    preprocessors: {
      'test/unit/*.test.js': ['webpack', 'sourcemap'],
      'test/unit/**/*.test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
