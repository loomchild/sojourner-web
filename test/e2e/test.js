function log (logEntries) {
  logEntries.forEach(function (log) {
    console.log(`[${log.level}] ${log.message}`)
  })
}

module.exports = {
  'title test': async (browser) => {
    try {
      await browser.url(browser.globals.url)

      await browser.waitForElementVisible('body', 5000)

      await browser.waitForElementVisible('h1.page-title', 10000)

      await browser.assert.titleContains('| Sojourner')

      await browser.end()
    } finally {
      await browser.getLog('browser', log)
    }
  }
}
