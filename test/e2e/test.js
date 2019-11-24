module.exports = {
  'title test': (browser) => {
    browser.url(browser.globals.url)
    browser.waitForElementVisible('body', 5000)
    browser.waitForElementVisible('h1.page-title', 20000)

    browser.assert.title('FOSDEM\'19 | Sojourner')

    browser.end()
  }
}
