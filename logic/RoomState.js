export default class RoomState {
  constructor (data) {
    this.room = data.room
    this.state = data.state !== undefined ? data.state : -1
    this.emergency = false

    if (this.state === -1) {
      this.name = ''
    } else if (this.state === 0) {
      this.name = ''
    } else if (this.state === 1) {
      this.name = 'Full'
      this.icon = 'mdi-minus-circle'
    } else if (this.state === 2) {
      this.name = 'Emergency evacuation'
      this.icon = 'mdi-minus-circle'
      this.emergency = true
    } else {
      throw new Error(`Unknown room state: ${this.state}`)
    }
  }
}
