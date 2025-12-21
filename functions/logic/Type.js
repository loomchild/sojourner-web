module.exports = class Type {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.statName = data.statName
    Object.freeze(this)
  }
}
