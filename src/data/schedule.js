import xmltojson from 'xmltojson'
import firstBy from 'thenby'
import _ from 'lodash'

import config from '../../config'
import Day from '../logic/Day'
import Event from '../logic/Event'
import Link from '../logic/Link'
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
      .then(() => getCachedSchedule())
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
  const persons = event.persons && event.persons[0] && event.persons[0].person
    ? event.persons[0].person.map(person => person.text) : []
  const links = event.links && event.links[0] && event.links[0].link
    ? event.links[0].link.map(link => new Link({href: link.href, title: link.text})) : []

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
    persons: persons,
    links: links
  }))

  events[e.id] = e
  return e
}

const addRoom = (rooms, room) => {
  let r = rooms[room.name]
  if (!r) {
    r = Object.freeze(new Room({
      name: room.name
    }))
    rooms[r.name] = r
  }

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
          if (room.event && room.event.length > 0) {
            const r = addRoom(parsedSchedule.rooms, room)
            for (const event of room.event || []) {
              const track = addTrack(parsedSchedule.tracks, event)
              addEvent(parsedSchedule.events, event, d, r, track)
            }
          }
        }
      }

      return parsedSchedule
    })
}

const getCachedSchedule = () => {
  if (cachedSchedule == null) {
    return parseSchedule()
      .then(parsedSchedule => {
        cachedSchedule = parsedSchedule
        return cachedSchedule
      })
  }

  return Promise.resolve(cachedSchedule)
}

const eventNaturalSort = firstBy(event => event.day.index).thenBy('start')

const getAllEvents = () => {
  return getCachedSchedule()
    .then(schedule => Object.values(schedule.events)
      .sort(eventNaturalSort))
}

const getEvent = (eventId) => {
  return getCachedSchedule()
    .then(schedule => schedule.events[eventId])
}

const getFavouriteEvents = () => {
  return getFavourites()
    .then(favourites => {
      return getCachedSchedule()
        .then(schedule => Object.values(schedule.events)
          .filter(event => favourites[event.id])
          .sort(eventNaturalSort))
    })
}

const getTrackEvents = (trackName) => {
  return getCachedSchedule()
    .then(schedule => Object.values(schedule.events)
      .filter(event => event.track.name === trackName)
      .sort(eventNaturalSort))
}

const getRoomEvents = (roomName) => {
  return getCachedSchedule()
    .then(schedule => Object.values(schedule.events)
      .filter(event => event.room.name === roomName)
      .sort(eventNaturalSort))
}

const getAllTracks = () => {
  return getCachedSchedule()
    .then(schedule => Object.values(schedule.tracks).sort(firstBy('name')))
}

const getAllTrackStats = () => {
  return getCachedSchedule()
    .then(schedule => {
      const tracks = Object.values(schedule.tracks).sort(firstBy('name'))
      const eventsByTrack = _.groupBy(Object.values(schedule.events), event => event.track.name)

      return tracks.map(track => {
        const events = eventsByTrack[track.name] ? eventsByTrack[track.name] : []
        const rooms = _.uniq(events.map(event => event.room.name)).sort()
        const days = _.uniq(events.map(event => event.day.name)).sort()

        return {
          track: track,
          events: events,
          days: days,
          rooms: rooms
        }
      })
    })
}

const getAllRooms = () => {
  return getCachedSchedule()
    .then(schedule => Object.values(schedule.rooms).sort(firstBy('name')))
}

const getAllRoomStats = () => {
  return getCachedSchedule()
    .then(schedule => {
      const rooms = Object.values(schedule.rooms).sort(firstBy('name'))
      const eventsByRoom = _.groupBy(Object.values(schedule.events), event => event.room.name)

      return rooms.map(room => {
        const events = eventsByRoom[room.name] ? eventsByRoom[room.name] : []
        const eventsByTrack = _.groupBy(events, event => event.track.name)
        const tracks = _.uniq(events.sort(eventNaturalSort).map(event => event.track))
          .map(track => ({
            track: track,
            days: _.uniq(eventsByTrack[track.name].map(event => event.day.name)).sort()
          }))

        return {
          room: room,
          events: events,
          tracks: tracks
        }
      })
    })
}

export {
  getSchedule, refreshSchedule,
  getAllEvents, getEvent, getFavouriteEvents, getTrackEvents, getRoomEvents,
  getAllTracks, getAllTrackStats,
  getAllRooms, getAllRoomStats
}
