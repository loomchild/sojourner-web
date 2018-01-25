export default class Building {
  constructor (data) {
    this.name = data.name
  }

  containsRoom (roomName) {
    return roomName.toUpperCase().startsWith(this.name)
  }
}
