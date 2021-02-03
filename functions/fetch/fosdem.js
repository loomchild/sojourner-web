const { DOMParser } = require('xmldom')
const xmltojson = require('xmltojson')
xmltojson.stringToXML = (string) => new DOMParser().parseFromString(string, 'text/xml')

const axios = require('axios')
const Event = require('../logic/Event')
const Type = require('../logic/Type')
const Link = require('../logic/Link')
const Video = require('../logic/Video')

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

const getType = (event, typeSet) => {
  const type = getText(event.type)
  if (!typeSet.has(type)) {
    return 'other'
  }
  return type
}

const getVideoType = (url) => {
  if (url.endsWith('.mp4')) {
    return 'video/mp4'
  } else if (url.endsWith('.webm')) {
    return 'video/webm'
  } else {
    return null
  }
}

const createEvent = (event, type, date, room) => {
  const persons = event.persons && event.persons[0] && event.persons[0].person
    ? event.persons[0].person.map(person => person.text) : []
  const allLinks = event.links && event.links[0] && event.links[0].link
    ? event.links[0].link.map(link => new Link({ href: link.href, title: link.text })) : []

  const links = []
  const videos = []
  for (const link of allLinks) {
    const videoType = getVideoType(link.href)
    if (link.title.startsWith('Video recording') && videoType) {
      videos.push(new Video({
        type: videoType,
        url: link.href
      }))
    } else {
      links.push(link)
    }
  }

  const live = ['2021-02-06', '2021-02-07'].includes(new Date().toISOString().substring(0, 10))
  if (live && !room.startsWith('B.') && !room.startsWith('I.') && !room.startsWith('S.')) {
    const normalizedRoom = room.toLowerCase().replace(/\./g, '')
    const type = 'application/vnd.apple.mpegurl'
    const url = `https://stream.fosdem.org/${normalizedRoom}.m3u8`
    videos.push(new Video({
      type,
      url
    }))
  }

  let title = getText(event.title)
  if (title.startsWith('CANCELLED')) {
    return null
  }
  if (title.startsWith('AMENDMENT')) {
    title = title.substring(10)
  }

  const track = getText(event.track)
  if (type === 'other' && track.endsWith('stand')) {
    return null
  }

  const chat = /^[A-Z]\./.test(room) ? `https://chat.fosdem.org/#/room/#${room.substring(2)}:fosdem.org` : null

  return new Event({
    id: event.id.toString(),
    startTime: getText(event.start),
    duration: getText(event.duration),
    title: title,
    subtitle: getText(event.subtitle),
    abstract: getText(event.abstract),
    description: getText(event.description),
    type: type,
    track: track,
    date: date,
    room: room,
    persons: persons,
    links: links,
    videos,
    chat
  })
}

module.exports = async function (scheduleUrl) {
  const response = await axios.get(scheduleUrl)

  const json = xmltojson.parseString(response.data, {
    attrKey: '',
    textKey: 'text',
    valueKey: 'value',
    attrsAsObject: false
  })

  const schedule = flattenAttributes(json.schedule)

  const types = [
    /* new Type({
      id: 'keynote',
      name: 'Keynotes',
      statName: 'lectures'
    }), */
    new Type({
      id: 'maintrack',
      name: 'Main tracks',
      statName: 'tracks'
    }),
    new Type({
      id: 'devroom',
      name: 'Developer rooms',
      statName: 'rooms'
    }),
    new Type({
      id: 'lightningtalk',
      name: 'Lightning talks',
      statName: 'talks'
    }),
    new Type({
      id: 'other',
      name: 'Other events',
      statName: 'events'
    })
  ]

  const typeSet = new Set(types.map(type => type.id))

  const events = []

  for (const d of schedule[0].day || []) {
    const date = d.date
    for (const r of d.room || []) {
      if (r.event && r.event.length > 0) {
        const room = r.name
        for (const e of r.event || []) {
          const type = getType(e, typeSet)
          const event = createEvent(e, type, date, room)
          if (event) {
            events.push(event)
          }
        }
      }
    }
  }

  return { types, events }
}
