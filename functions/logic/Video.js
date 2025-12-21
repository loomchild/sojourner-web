module.exports = class Video {
  constructor (data) {
    this.type = data.type
    this.url = data.url
    Object.freeze(this)
  }
}
