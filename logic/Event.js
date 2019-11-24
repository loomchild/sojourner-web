import moment from 'moment'

import Room from './Room'
import Type from './Type'

const TIME_FORMAT = 'HH:mm'

export default class Event {
  constructor (data = {}) {
    this.exists = !!data.id
    this.id = data.id
    this.startTime = data.startTime
    this.duration = data.duration
    this.title = data.title
    this.subtitle = data.subtitle
    this.abstract = data.abstract
    this.description = data.description
    this.language = data.language

    this.type = data.type || new Type()
    this.track = data.track || {}
    this.day = data.day || {}
    this.room = data.room || new Room()
    this.persons = data.persons || []
    this.links = data.links || []

    if (this.startTime && this.duration) {
      this.endTime = moment(this.startTime, TIME_FORMAT).add(moment.duration(this.duration)).format(TIME_FORMAT)
    }
  }

  speakers () {
    return this.persons.join(', ')
  }
}
