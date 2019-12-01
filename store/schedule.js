import firstBy from 'thenby'
import _ from 'lodash'

import Day from '@/logic/Day'
import Event from '@/logic/Event'
import Link from '@/logic/Link'
import Room from '@/logic/Room'
import Track from '@/logic/Track'
import Type from '@/logic/Type'

const conference = require(`@/conferences/${process.env.CONFERENCE_ID}`)

const createDay = (date) => Object.freeze(new Day({
  date: new Date(date)
}))

const createRoom = (room, building) => Object.freeze(new Room({
  name: room,
  building
}))

const createTrack = (name, type) => Object.freeze(new Track({
  name: name,
  type: type
}))

const createType = (type, priority) => {
  const conferenceType = priority < conference.types.length ? conference.types[priority] : conference.types[conference.types.length - 1]

  return Object.freeze(new Type({
    id: type.id,
    priority,
    name: type.name,
    statName: type.statName,
    ...conferenceType
  }))
}

const createEvent = (event, day, room, track, type) => {
  const links = event.links ? event.links.map(link => new Link(link)) : []

  return Object.freeze(new Event({
    id: event.id,
    startTime: event.startTime,
    duration: event.duration,
    title: event.title,
    subtitle: event.subtitle,
    abstract: event.abstract,
    description: event.description,
    language: event.language,

    type: type,
    track: track,
    day: day,
    room: room,
    persons: event.persons,
    links: links
  }))
}

const eventNaturalSort = firstBy(event => event.day.index).thenBy('startTime').thenBy(event => event.type.priority).thenBy('endTime')

const MAX_SEARCH_RESULTS = 50

const scoreField = (field, multiplier, keywords) => keywords.filter(keyword => field.includes(keyword)).length * multiplier

const scoreEvent = (event, keywords) => {
  let score = 0

  score += scoreField(event.title.toLowerCase(), 3, keywords)

  score += scoreField((event.subtitle || '').toLowerCase(), 2, keywords)

  score += scoreField(((event.abstract || '') + ' ' + event.track.name + ' ' + event.persons.join(' ')).toLowerCase(), 1, keywords)

  return score
}

const eventScoreSort = (eventScores) => firstBy(event => eventScores[event.id] || 0, -1).thenBy('title')

export default {
  state: {
    scheduleInitialized: false,
    days: {},
    rooms: {},
    tracks: {},
    types: {},
    events: {},
    eventIndex: {}
  },

  getters: {
    scheduleInitialized: state => state.scheduleInitialized,

    days: state => state.days,
    rooms: state => state.rooms,
    tracks: state => state.tracks,
    types: state => state.types,
    events: state => state.events,

    allDays: state => Object.values(state.days).sort(firstBy('index')),

    allEvents: state => Object.values(state.events).sort(eventNaturalSort),

    type: state => typeName => Object.values(state.types)
      .find(type => type.name === typeName),

    typeEvents: state => typeName => Object.values(state.events)
      .filter(event => event.type.name === typeName)
      .sort(eventNaturalSort),

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

    favouriteAddedEvents: (state, rootGetters) => oldFavouriteEvents => {
      const favourites = rootGetters.favourites
      const oldFavourites = {}
      oldFavouriteEvents.forEach(oldFavouriteEvent => {
        oldFavourites[oldFavouriteEvent.id] = true
      })
      return Object.values(state.events)
        .filter(event => favourites[event.id] || oldFavourites[event.id])
        .sort(eventNaturalSort)
    },

    typeTrackStats: (state, getters) => typeName => {
      const typeEvents = getters.typeEvents(typeName)
      const eventsByDay = _.groupBy(Object.values(typeEvents), event => event.day.index)

      return getters.allDays.map(day => {
        const dayEvents = eventsByDay[day.index]
        const dayTracks = _.uniqBy(dayEvents.map(event => event.track), track => track.name).sort(firstBy('name'))
        const tracks = dayTracks.map(track => {
          const events = dayEvents.filter(event => event.track.name === track.name).sort(eventNaturalSort)

          const rooms = _.uniqBy(events.map(event => event.room), room => room.name)
          // I assume there's maximum one room per track per day, could warn if not the case
          const room = rooms[0]

          return {
            track,
            room,
            events
          }
        })

        return {
          day,
          tracks
        }
      })
    },

    allTypeStats: state => {
      const types = Object.values(state.types).sort(firstBy('priority'))
      const eventsByType = _.groupBy(Object.values(state.events), event => event.type.name)
      return types.map(type => {
        const events = eventsByType[type.name] || []
        const tracks = _.uniqBy(events.sort(eventNaturalSort).map(event => event.track), track => track.name)

        return {
          type,
          events,
          tracks
        }
      })
    },

    conferenceName: () => conference.name,

    conferenceNameColor: () => conference.nameColor || ''
  },

  mutations: {
    setScheduleInitialized (state) {
      state.scheduleInitialized = true
    },

    setDays (state, days) {
      state.days = days
    },

    setRooms (state, rooms) {
      state.rooms = rooms
    },

    setTracks (state, tracks) {
      state.tracks = tracks
    },

    setTypes (state, types) {
      state.types = types
    },

    setEvents (state, events) {
      state.events = events
    },

    setEventIndex (state, eventIndex) {
      state.eventIndex = eventIndex
    }
  },

  actions: {
    initSchedule ({commit, getters, dispatch}, cache) {
      if (!cache) {
        cache = 'default'
      }
      return fetch(process.env.SCHEDULE_URL, {cache})
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`)
          }

          return response.json()
        })
        .then(conference => {
          if (!conference.events) {
            return
          }

          const days = {}
          const events = {}
          const rooms = {}
          const types = {}
          const tracks = {}

          const typeList = conference.types.map((t, index) => createType(t, index))
          typeList.forEach((t) => {
            types[t.id] = t
          })

          const dateCache = {}

          conference.events.forEach(e => {
            let day = dateCache[e.date]
            if (!day) {
              day = createDay(e.date)
              days[day.index] = day
              dateCache[e.date] = day
            }

            // TODO: make buildings universal
            const building = getters.roomBuilding(e.room)

            let room = rooms[e.room]
            if (!room) {
              room = createRoom(e.room, building)
              rooms[room.name] = room
            }

            let type = types[e.type]
            if (!type) {
              type = createType(e.type)
              types[type.name] = type
            }

            let track = tracks[e.track]
            if (!track) {
              track = createTrack(e.track, type)
              tracks[track.name] = track
            }

            const event = createEvent(e, day, room, track, type)
            events[event.id] = event
          })

          commit('setDays', days)
          commit('setRooms', rooms)
          commit('setTracks', tracks)
          commit('setTypes', types)
          commit('setEvents', events)
          commit('setScheduleInitialized')
        })
        .then(() => dispatch('reindexEvents'))
    },

    refreshSchedule ({dispatch}) {
      if (!navigator.onLine) {
        return Promise.reject(new Error('Offline'))
      }

      return dispatch('initSchedule', 'reload')
    },

    notifyRefreshSchedule ({dispatch}) {
      dispatch('showNotification', {
        message: 'New schedule is available.',
        timeout: 0,
        button: {
          title: 'REFRESH',
          handler: () => {
            dispatch('refreshSchedule')
          }
        }
      })
    },

    reindexEvents ({state, commit, dispatch}) {
      const index = {}
      for (let event of Object.values(state.events)) {
        const blob = JSON.stringify(event, null, 2).toLowerCase()
          .replace(/"[a-zA-Z0-9_]+":|/g, '').replace(/",|"|/g, '')
        index[event.id] = blob
      }
      commit('setEventIndex', index)

      dispatch('searchEvents', 'warm')
    },

    searchEvents ({state}, query) {
      const keywords = query.toLowerCase().split(' ')
      let foundEvents = []

      for (let [eventId, blob] of Object.entries(state.eventIndex)) {
        if (keywords.every(keyword => blob.includes(keyword))) {
          foundEvents.push(state.events[eventId])
        }
      }

      const eventScores = {}
      foundEvents.forEach(event => {
        eventScores[event.id] = scoreEvent(event, keywords)
      })

      foundEvents = foundEvents.sort(eventScoreSort(eventScores))

      foundEvents = foundEvents.splice(0, MAX_SEARCH_RESULTS)

      return foundEvents
    }
  }
}
