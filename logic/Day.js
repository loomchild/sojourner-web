export default class Day {
  constructor (data) {
    this.index = data.index
    this.date = data.date

    if (this.index === 1) {
      this.name = 'Saturday'
    } else if (this.index === 2) {
      this.name = 'Sunday'
    } else {
      throw new Error(`Unknown day: ${this.index}`)
    }
  }
}
