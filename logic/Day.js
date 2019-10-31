const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default class Day {
  constructor (data) {
    this.date = data.date
    this.index = (this.date.getDay() + 6) % 7
    this.name = WEEKDAYS[this.index]
  }
}
