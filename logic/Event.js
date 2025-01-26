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
    this.videos = data.videos || []
    this.chat = data.chat

    if (this.startTime && this.duration) {
      this.endTime = moment(this.startTime, TIME_FORMAT).add(moment.duration(this.duration)).format(TIME_FORMAT)
    }
  }

  get speakers () {
    return this.persons.join(', ')
  }

  happeningNow (currentDate, currentTime) {
    return this.day.dateString === currentDate &&
      this.startTime <= currentTime && this.endTime >= currentTime &&
      this.track.name !== 'Infodesk'
  }

  happeningLive (currentDate, currentTime, minEndTime, maxStartTime) {
    return this.day.dateString === currentDate &&
      this.startTime <= maxStartTime && (this.startTime >= currentTime || this.endTime >= minEndTime) &&
      this.track.name !== 'Infodesk'
  }
}
