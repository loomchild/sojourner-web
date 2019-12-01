module.exports = {
  src_folders: ['test/e2e'],

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    host: '127.0.0.1',
    port: 9515,
    cli_args: [
      '--verbose'
    ]
  },

  test_settings: {
    default: {
      globals: {
        url: 'http://localhost:8080'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        loggingPrefs: { 'browser': 'ALL' },
        chromeOptions: {
          binary: require('puppeteer').executablePath(),
          args: [
            '--no-sandbox'
          ]
        }
      }
    }
  }
}
