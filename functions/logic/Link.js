module.exports = class Link {
  constructor (data) {
    this.href = data.href
    this.title = data.title
    Object.freeze(this)
  }
}
