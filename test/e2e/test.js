module.exports = {
  'title test': (browser) => {
    browser.url(browser.globals.url)
    browser.waitForElementVisible('body', 5000)

    browser.pause(1000) // wait for title update
    browser.assert.title('Sojourner')

    browser.end()
  }
}
