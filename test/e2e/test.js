module.exports = {
  'title test': (browser) => {
    browser.url(browser.globals.url)
    browser.waitForElementVisible('body', 5000)
    browser.waitForElementVisible('h1.page-title', 30000)

    browser.assert.titleContains('| Sojourner')

    browser.end()
  }
}
