module.exports = {
  'title test': (browser) => {
    browser.url(browser.globals.url)
    browser.waitForElementVisible('body', 5000)
    browser.waitForElementVisible('h1.page-title', 20000)

    browser.assert.title('FLOWCON\'19 | Sojourner')

    browser.end()
  }
}
