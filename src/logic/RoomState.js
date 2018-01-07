export default class Room {
  constructor (data) {
    this.room = data.room
    this.state = data.state !== undefined ? data.state : -1

    if (this.state === -1) {
      this.name = 'unknown room state'
      this.icon = 'help'
      this.color = 'grey'
    } else if (this.state === 0) {
      this.name = 'room open'
      this.icon = 'check_circle'
      this.color = 'success'
    } else if (this.state === 1) {
      this.name = 'room full'
      this.icon = 'error'
      this.color = 'red darken-2'
    } else if (this.state === 2) {
      this.name = 'room emergency evacuation'
      this.icon = 'whatshot'
      this.color = 'error'
    } else {
      throw new Error(`Unknown room state: ${this.state}`)
    }
  }
}
