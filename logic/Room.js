export default class Room {
  constructor (data = {}) {
    this.name = data.name
    this.building = data.building || {}
  }
}
