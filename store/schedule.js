import firstBy from 'thenby'
import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'
import moment from 'moment'

import Day from '@/logic/Day'
import Event from '@/logic/Event'
import Link from '@/logic/Link'
import Person from '@/logic/Person'
import Room from '@/logic/Room'
import Track from '@/logic/Track'
import Type from '@/logic/Type'
import Video from '@/logic/Video'

import config from '@/config'

const TIME_FORMAT = 'HH:mm'
const STARTING_SOON_MINUTES = 60
const STARTED_RECENTLY_MINUTES = 10
const ENDING_SOON_MINUTES = 15

const createDay = (date) => Object.freeze(new Day({
  date
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
  const conferenceType = priority < config.types.length ? config.types[priority] : config.types[config.types.length - 1]

  return Object.freeze(new Type({
    id: type.id,
    priority,
    name: type.name,
    statName: type.statName,
    ...conferenceType
  }))
}

const createEvent = (event, day, room, track, type, allPersons) => {
  const links = event.links ? event.links.map(link => Object.freeze(new Link(link))) : []
  const videos = event.videos ? event.videos.map(video => Object.freeze(new Video(video))) : []
  const persons = event.persons ? event.persons.map(person => {
    if (typeof person === 'string') {
      return Object.freeze(new Person({ name: person }))
    } else {
      if (person.id && !(person.id in allPersons)) {
        allPersons[person.id] = new Person(person)
      }

      return allPersons[person.id]
    }
  }) : []

  return Object.freeze(new Event({
    id: event.id,
    startTime: config.features.localtimes ? moment.utc(event.startTime, TIME_FORMAT).add(-1, 'h').local().format(TIME_FORMAT) : event.startTime,
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
    persons: persons,
    links: links,
    videos,
    chat: event.chat
  }))
}

const createPerson = (person) => {
  return new Person({
    id: person.id,
    name: person.name,
    bio: person.bio
  })
}

const eventNaturalSort = firstBy(event => event.day.index).thenBy('startTime').thenBy(event => event.type.priority).thenBy('endTime')

const MAX_SEARCH_RESULTS = 50

const scoreField = (field, multiplier, keywords) => keywords.filter(keyword => field.includes(keyword)).length * multiplier

const scoreEvent = (event, favourites, keywords) => {
  let score = 0

  score += scoreField(event.title.toLowerCase(), 30, keywords)

  score += scoreField((event.subtitle || '').toLowerCase(), 20, keywords)

  score += scoreField(((event.abstract || '') + ' ' + event.track.name + ' ' + event.speakers).toLowerCase(), 10, keywords)

  if (favourites[event.id]) {
    score += 5
  }

  return score
}

const eventScoreSort = (eventScores) => firstBy(event => eventScores[event.id] || 0, -1).thenBy(eventNaturalSort)

const eventLiveSort = (favourites) => firstBy(event => !favourites[event.id]).thenBy(eventNaturalSort)

const trackSort = (favouriteTracks) => firstBy(track => !favouriteTracks[track.name]).thenBy(track => track.name.toLowerCase())

const roomSort = firstBy(room => room.name.includes('online') ? 1 : -1).thenBy(room => room.name.toLowerCase())

const personSort = firstBy(person => person.sortName)

export default {
  state: {
    scheduleInitialized: false,
    scheduleUpdaterInitialized: false,
    lastModified: null,
    days: {},
    rooms: {},
    tracks: {},
    types: {},
    persons: {},
    events: {},
    eventIndex: {}
  },

  getters: {
    scheduleInitialized: state => state.scheduleInitialized,
    lastModified: state => state.lastModified ? moment(state.lastModified).format('YYYY-MM-DD HH:mm') : null,

    days: state => state.days,
    rooms: state => state.rooms,
    tracks: state => state.tracks,
    types: state => state.types,
    persons: state => state.persons,
    events: state => state.events,

    allDays: state => Object.values(state.days).sort(firstBy('index')),

    allEvents: state => Object.values(state.events).sort(eventNaturalSort),

    allPersons: state => Object.values(state.persons).sort(personSort),

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

    favouriteAddedEvents: (state, getters, rootState, rootGetters) => oldFavouriteEvents => {
      const favourites = rootGetters.favourites
      const oldFavourites = {}
      oldFavouriteEvents.forEach(oldFavouriteEvent => {
        oldFavourites[oldFavouriteEvent.id] = true
      })
      return Object.values(state.events)
        .filter(event => favourites[event.id] || oldFavourites[event.id])
        .sort(eventNaturalSort)
    },

    selectedEvents: state => eventIds => {
      const eventIdSet = new Set(eventIds)

      return Object.values(state.events)
        .filter(event => eventIdSet.has(event.id))
        .sort(eventNaturalSort)
    },

    selectedEventsOrdered: state => eventIds => eventIds.map(eventId => state.events[eventId]).filter(Boolean),

    typeTrackStats: (state, getters, rootState, rootGetters) => typeName => {
      const typeEvents = getters.typeEvents(typeName)
      const eventsByDay = groupBy(Object.values(typeEvents), event => event.day.index)
      const favouriteTracks = rootGetters.favouriteTracks

      return getters.allDays.map(day => {
        const dayEvents = eventsByDay[day.index] || []
        const dayTracks = uniqBy(dayEvents.map(event => event.track), track => track.name).sort(trackSort(favouriteTracks))
        const tracks = dayTracks.map(track => {
          const events = dayEvents.filter(event => event.track.name === track.name).sort(eventNaturalSort)

          const rooms = uniqBy(events.map(event => event.room), room => room.name)
          rooms.sort(roomSort)

          return {
            track,
            rooms,
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
      const eventsByType = groupBy(Object.values(state.events), event => event.type.name)
      return types.map(type => {
        const events = eventsByType[type.name] || []
        const tracks = uniqBy(events.sort(eventNaturalSort).map(event => event.track), track => track.name)

        return {
          type,
          events,
          tracks
        }
      })
    },

    liveEvents: (state, getters, rootState, rootGetters) => {
      const currentDate = rootGetters.currentDate
      const currentTime = rootGetters.currentTime

      const minEndTime = moment(currentTime, TIME_FORMAT).add(ENDING_SOON_MINUTES, 'minutes').format(TIME_FORMAT)
      const minStartTime = moment(currentTime, TIME_FORMAT).subtract(STARTED_RECENTLY_MINUTES, 'minutes').format(TIME_FORMAT)
      const maxStartTime = moment(currentTime, TIME_FORMAT).add(STARTING_SOON_MINUTES, 'minutes').format(TIME_FORMAT)

      const favourites = rootGetters.favourites
      const events = Object.values(state.events)
        .filter(event => event.happeningLive(!!favourites[event.id], currentDate, currentTime, minEndTime, minStartTime, maxStartTime))
        .sort(eventLiveSort(favourites))
      return events
    },

    liveTrackEvent: (state, getters, rootState, rootGetters) => trackName => {
      if (!trackName) {
        return null
      }
      const currentDate = rootGetters.currentDate
      const currentTime = rootGetters.currentTime
      const event = getters.trackEvents(trackName)
        .find(event => event.happeningNow(currentDate, currentTime))
      return event || null
    },

    nextTrackEvent: (state, getters) => event => {
      if (!event) {
        return null
      }
      const trackEvents = getters.trackEvents(event.track.name)
      const index = trackEvents.findIndex(e => e.id === event.id)
      return trackEvents[index + 1] || null
    },

    previousTrackEvent: (state, getters) => event => {
      if (!event) {
        return null
      }
      const trackEvents = getters.trackEvents(event.track.name)
      const index = trackEvents.findIndex(e => e.id === event.id)
      return trackEvents[index - 1] || null
    },

    searchEvents: (state, getters, rootState, rootGetters) => query => {
      const keywords = query.toLowerCase().split(' ')
      let foundEvents = []

      for (const [eventId, blob] of Object.entries(state.eventIndex)) {
        if (keywords.every(keyword => blob.includes(keyword))) {
          foundEvents.push(state.events[eventId])
        }
      }

      const eventScores = {}
      foundEvents.forEach(event => {
        eventScores[event.id] = scoreEvent(event, rootGetters.favourites, keywords)
      })

      foundEvents = foundEvents.sort(eventScoreSort(eventScores))

      foundEvents = foundEvents.splice(0, MAX_SEARCH_RESULTS)

      return foundEvents
    },

    allPersonsByLetter: (state, getters) => {
      const allPersonsByLetter = []

      for (const person of getters.allPersons) {
        const lastGroup = allPersonsByLetter[allPersonsByLetter.length - 1] 

        if (!lastGroup || lastGroup[0].firstLetter !== person.firstLetter) {
          allPersonsByLetter.push([person])
        } else {
          lastGroup.push(person)
        }
      }

      return allPersonsByLetter
    },
  },

  mutations: {
    setScheduleInitialized (state, initialized) {
      state.scheduleInitialized = initialized
    },

    setLastModified (state, lastModified) {
      state.lastModified = lastModified
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

    setPersons (state, persons) {
      state.persons = persons
    },

    setEvents (state, events) {
      state.events = events
    },

    setEventIndex (state, eventIndex) {
      state.eventIndex = eventIndex
    },

    initializeScheduleUpdater (state) {
      state.scheduleUpdaterInitialized = true
    }
  },

  actions: {
    async initSchedule ({ state, commit, getters, dispatch, rootGetters }, cache) {
      if (!cache) {
        cache = 'default'
      }

      const response = await fetch(rootGetters.conferenceScheduleUrl, { cache })

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      const lastModified = response.headers.get('Last-Modified')
      if (state.lastModified && state.lastModified === lastModified) {
        return
      }

      commit('setLastModified', lastModified)

      const conference = await response.json()

      if (!conference.events) {
        return
      }

      const days = {}
      const events = {}
      const rooms = {}
      const types = {}
      const tracks = {}
      const persons = {}

      const typeList = conference.types.map((t, index) => createType(t, index))
      typeList.forEach((t) => {
        types[t.id] = t
      })

      if (conference.persons) {
        const personList = conference.persons.map((p) => createPerson(p))
        personList.forEach((p) => {
          persons[p.id] = p
        })
      }

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

        const type = types[e.type]
        if (!type) {
          throw new Error(`Unknown type ${e.type}`)
        }

        let track = tracks[e.track]
        if (!track) {
          track = createTrack(e.track, type)
          tracks[track.name] = track
        }

        const event = createEvent(e, day, room, track, type, persons)
        events[event.id] = event
      })

      for (const event of Object.values(events)) {
        for (const person of event.persons) {
          if (person.exists) {
            person.addEvent(event)
          }
        }
      }
      for (const [id, person] of Object.entries(persons)) {
        person.events.sort(eventNaturalSort)
        Object.freeze(person)
      }

      commit('setDays', days)
      commit('setRooms', rooms)
      commit('setTracks', tracks)
      commit('setTypes', types)
      commit('setPersons', persons)
      commit('setEvents', events)
      commit('setScheduleInitialized', true)

      await dispatch('reindexEvents')
    },

    refreshSchedule ({ dispatch }) {
      if (!navigator.onLine) {
        return Promise.reject(new Error('Offline'))
      }

      return dispatch('initSchedule', 'reload')
    },

    async initScheduleBuster ({ dispatch, state }) {
      await new Promise((resolve) => setTimeout(resolve, 5000))

      if (state.lastModified && (new Date(state.lastModified) < new Date('2025-01-19 20:00 GMT'))) {
        console.log('Reloading stale schedule')
        dispatch('refreshSchedule')
      }
    },

    notifyRefreshSchedule ({ dispatch }) {
      dispatch('initSchedule')
    },

    initScheduleUpdater ({ dispatch, state, commit }) {
      if (!process.env.SCHEDULE_INTERVAL || state.scheduleUpdaterInitialized) {
        return
      }
      const pollInterval = parseInt(process.env.SCHEDULE_INTERVAL)

      setInterval(() => dispatch('initSchedule'), pollInterval * 1000)

      commit('initializeScheduleUpdater')
    },

    reindexEvents ({ state, getters, commit, dispatch }) {
      const index = {}
      for (const event of Object.values(state.events)) {
        const blob = JSON.stringify(
          event,
          (k, v) => k === 'events' ? undefined : v,
          2
        ).toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/"[a-zA-Z0-9_]+":|/g, '').replace(/",|"|/g, '')
        index[event.id] = blob
      }
      commit('setEventIndex', index)

      getters.searchEvents('warm')
    }
  }
}
