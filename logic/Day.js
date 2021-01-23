import moment from 'moment'
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DATE_FORMAT = 'YYYY-MM-DD'

export default class Day {
  constructor (data) {
    this.date = data.date
    this.dateString = moment(this.date).format(DATE_FORMAT)
    this.index = (this.date.getDay() + 6) % 7
    this.name = WEEKDAYS[this.index]
  }
}
