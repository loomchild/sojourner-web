import xmltojson from 'xmltojson'
import firstBy from 'thenby'
import _ from 'lodash'

import config from '../../config'
import Day from '../logic/Day'
import Event from '../logic/Event'
import Link from '../logic/Link'
import Room from '../logic/Room'
import Track from '../logic/Track'

const fetchSchedule = (cache) => {
  // See https://hacks.mozilla.org/2016/03/referrer-and-cache-control-apis-for-fetch/ for more details
  return fetch(config.scheduleUrl, {cache: cache})
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      return response.text()
    })
}

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

const createDay = (day) => Object.freeze(new Day({
  index: day.index,
  date: day.date
}))

const createRoom = (room, building) => Object.freeze(new Room({
  name: room.name,
  building: building
}))

const createTrack = (name) => Object.freeze(new Track({
  name: name
}))

const createEvent = (event, day, room, track) => {
  const persons = event.persons && event.persons[0] && event.persons[0].person
    ? event.persons[0].person.map(person => person.text) : []
  const links = event.links && event.links[0] && event.links[0].link
    ? event.links[0].link.map(link => new Link({href: link.href, title: link.text})) : []

  return Object.freeze(new Event({
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
}

const eventNaturalSort = firstBy(event => event.day.index).thenBy('start')

export default {
  state: {
    days: {},
    rooms: {},
    tracks: {},
    events: {}
  },

  getters: {
    days: state => state.days,
    rooms: state => state.rooms,
    tracks: state => state.tracks,
    events: state => state.events,

    allEvents: state => Object.values(state.events).sort(eventNaturalSort),

    trackEvents: state => trackName => Object.values(state.events)
      .filter(event => event.track.name === trackName)
      .sort(eventNaturalSort),

    roomEvents: state => roomName => Object.values(state.events)
      .filter(event => event.room.name === roomName)
      .sort(eventNaturalSort),

    favouriteEvents: (state, getters, rootState, rootGetters) => {
      const favourites = rootGetters.favourites
      return Object.values(state.events)
        .filter(event => favourites[event.id])
        .sort(eventNaturalSort)
    },

    allTrackStats: state => {
      const tracks = Object.values(state.tracks).sort(firstBy('name'))
      const eventsByTrack = _.groupBy(Object.values(state.events), event => event.track.name)

      return tracks.map(track => {
        const events = eventsByTrack[track.name] ? eventsByTrack[track.name] : []
        const eventsByRoom = _.groupBy(events, event => event.room.name)
        const eventsByDay = _.groupBy(events, event => event.day.index)

        const rooms = _.uniqBy(events.sort(eventNaturalSort).map(event => event.room), room => room.name)
          .map(room => ({
            room: room,
            days: _.uniq(eventsByRoom[room.name].map(event => event.day.name)).sort()
          }))
        const days = {}
        Object.keys(eventsByDay).forEach(dayIndex => {
          days[dayIndex] = _.uniq(eventsByDay[dayIndex].map(event => event.room))
        })

        return {
          track: track,
          events: events,
          days: days,
          rooms: rooms
        }
      })
    },

    allRoomStats: state => {
      const rooms = Object.values(state.rooms).sort(firstBy('name'))
      const eventsByRoom = _.groupBy(Object.values(state.events), event => event.room.name)

      return rooms.map(room => {
        const events = eventsByRoom[room.name] ? eventsByRoom[room.name] : []
        const eventsByTrack = _.groupBy(events, event => event.track.name)
        const eventsByDay = _.groupBy(events, event => event.day.index)
        const tracks = _.uniqBy(events.sort(eventNaturalSort).map(event => event.track), track => track.name)
          .map(track => ({
            track: track,
            days: _.uniq(eventsByTrack[track.name].map(event => event.day.name)).sort()
          }))
        const days = {}
        Object.keys(eventsByDay).forEach(dayIndex => {
          days[dayIndex] = _.uniq(eventsByDay[dayIndex].map(event => event.track))
        })

        return {
          room: room,
          events: events,
          tracks: tracks,
          days: days
        }
      })
    }
  },

  mutations: {
    setDays (state, days) {
      state.days = days
    },

    setRooms (state, rooms) {
      state.rooms = rooms
    },

    setTracks (state, tracks) {
      state.tracks = tracks
    },

    setEvents (state, events) {
      state.events = events
    }
  },

  actions: {
    parseSchedule ({commit, getters}) {
      return fetchSchedule('force-cache')
        .then(xml => {
          const json = xmltojson.parseString(xml, {attrKey: '', textKey: 'text', valueKey: 'value', attrsAsObject: false})
          return flattenAttributes(json.schedule)
        })
        .then(schedule => {
          const days = {}
          const events = {}
          const rooms = {}
          const tracks = {}

          for (const d of schedule[0].day || []) {
            const day = createDay(d)
            days[day.index] = day
            for (const r of d.room || []) {
              const building = getters.roomBuilding(r.name)
              if (r.event && r.event.length > 0) {
                const room = createRoom(r, building)
                if (!rooms[room.name]) {
                  rooms[room.name] = room
                }
                for (const e of r.event || []) {
                  const trackName = getText(e.track)
                  let track = tracks[trackName]
                  if (!track) {
                    track = createTrack(trackName)
                    tracks[trackName] = track
                  }
                  const event = createEvent(e, day, room, track)
                  events[event.id] = event
                }
              }
            }
          }

          commit('setDays', days)
          commit('setRooms', rooms)
          commit('setTracks', tracks)
          commit('setEvents', events)
        })
    },

    refreshSchedule ({dispatch}) {
      if (navigator.onLine) {
        return fetchSchedule('reload')
          .then(() => dispatch('parseSchedule'))
      } else {
        return Promise.reject(new Error('Offline'))
      }
    }
  }
}
