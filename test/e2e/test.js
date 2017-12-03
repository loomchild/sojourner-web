module.exports = {
  'title test': (browser) => {
    browser.url(browser.globals.url)
    browser.waitForElementVisible('body', 5000)

    browser.assert.title('Sojourner')

    browser.end()
  }
}
