function log (logEntries) {
  logEntries.forEach((entry) => {
    console.log(`[${entry.level}] ${entry.message}`)
  })
}

module.exports = {
  'title test': async (browser) => {
    try {
      await browser.url(browser.globals.url)

      await browser.waitForElementVisible('body', 5000)

      await browser.waitForElementVisible('h1.page-title', 180000)

      await browser.assert.titleContains('| Sojourner')

      await browser.end()
    } finally {
      const logAvailable = (await browser.isLogAvailable('browser')).value
      if (logAvailable) {
        const logEntries = (await browser.getLog('browser')).value
        log(logEntries)
      }
    }
  }
}
