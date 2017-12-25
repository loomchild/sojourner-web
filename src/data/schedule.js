import xmltojson from 'xmltojson'
import firstBy from 'thenby'

import config from '../../config'
import Day from '../logic/Day'
import Event from '../logic/Event'
import Room from '../logic/Room'
import Track from '../logic/Track'
import {getFavourites} from './favourite'

let cachedSchedule = null

const flattenAttributes = (element) => {
  if (element instanceof Array) {
    return element.map(flattenAttributes)
  }

  if (element instanceof Object) {
    const keys = Object.keys(element)

    if (keys.length === 1) {
      const key = keys[0]
      if (key === 'value') {
        return element[key]
      }
    }

    const newElement = {}
    keys.forEach(e => {
      newElement[e] = flattenAttributes(element[e])
    })
    return newElement
  }

  return element
}

const getText = (element) => element && element[0] && element[0].text && element[0].text[0] !== null ? element[0].text : undefined

const fetchSchedule = () => {
  // Never update schedule without explicit user request. Could also use cache: "default" to automatically update
  // See https://hacks.mozilla.org/2016/03/referrer-and-cache-control-apis-for-fetch/ for more details
  return fetch(config.scheduleUrl, {cache: 'force-cache'})
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      return response.text()
    })
}

const refreshSchedule = () => {
  if (navigator.onLine) {
    cachedSchedule = null
    return fetch(config.scheduleUrl, {cache: 'reload'})
      .then(() => getAllEvents())
      .then(() => true)
  } else {
    return Promise.resolve(false)
  }
}

const getSchedule = () => {
  return fetchSchedule()
    .then(xml => {
      const json = xmltojson.parseString(xml, {attrKey: '', textKey: 'text', valueKey: 'value', attrsAsObject: false})

      const schedule = flattenAttributes(json.schedule)

      return schedule
    })
}

const addTrack = (tracks, event) => {
  const name = getText(event.track)
  let track = tracks[name]
  if (!track) {
    track = Object.freeze(new Track(name))
    tracks[name] = track
  }
  return track
}

const addDay = (days, day) => {
  const d = Object.freeze(new Day({
    index: day.index,
    date: day.date
  }))

  days[d.index] = d
  return d
}

const addEvent = (events, event, day, room, track) => {
  const e = Object.freeze(new Event({
    id: event.id.toString(),
    start: getText(event.start),
    duration: getText(event.duration),
    title: getText(event.title),
    subtitle: getText(event.subtitle),
    abstract: getText(event.abstract),
    description: getText(event.description),

    type: getText(event.type),
    track: track,
    day: day,
    room: room,
    persons: event.persons[0].person ? event.persons[0].person.map(person => person.text) : []
  }))

  events[e.id] = e
  return e
}

const addRoom = (rooms, room) => {
  const r = Object.freeze(new Room({
    name: room.name
  }))

  rooms[r.name] = r
  return r
}

const parseSchedule = () => {
  return getSchedule()
    .then(schedule => {
      let parsedSchedule = {
        days: {},
        events: {},
        rooms: {},
        tracks: {}
      }

      for (const day of schedule[0].day || []) {
        const d = addDay(parsedSchedule.days, day)
        for (const room of day.room || []) {
          const r = addRoom(parsedSchedule.rooms, room)
          for (const event of room.event || []) {
            const track = addTrack(parsedSchedule.tracks, event)
            addEvent(parsedSchedule.events, event, d, r, track)
          }
        }
      }

      return parsedSchedule
    })
}

const getCachedEvents = () => {
  if (cachedSchedule == null) {
    return parseSchedule()
      .then(parsedSchedule => {
        cachedSchedule = parsedSchedule
        return cachedSchedule.events
      })
  }

  return Promise.resolve(cachedSchedule.events)
}

const getAllEvents = () => {
  return getCachedEvents()
    .then(events => Object.values(events).sort(firstBy(event => event.day.index).thenBy('start')))
}

const getFavouriteEvents = () => {
  return getFavourites()
    .then(favourites => {
      return getAllEvents()
        .then(events => events.filter(event => favourites[event.id]))
    })
}

const getEvent = (eventId) => {
  return getCachedEvents()
    .then(events => events[eventId])
}

export {getSchedule, refreshSchedule, getAllEvents, getEvent, getFavouriteEvents}
