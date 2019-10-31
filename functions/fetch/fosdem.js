const { DOMParser } = require('xmldom')
const xmltojson = require('xmltojson')
xmltojson.stringToXML = (string) => new DOMParser().parseFromString(string, 'text/xml')

const axios = require('axios')
const Event = require('../logic/Event')
const Link = require('../logic/Link')

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

const createEvent = (event, date, room) => {
  const persons = event.persons && event.persons[0] && event.persons[0].person
    ? event.persons[0].person.map(person => person.text) : []
  const links = event.links && event.links[0] && event.links[0].link
    ? event.links[0].link.map(link => new Link({href: link.href, title: link.text})) : []

  return new Event({
    id: event.id.toString(),
    start: getText(event.start),
    duration: getText(event.duration),
    title: getText(event.title),
    subtitle: getText(event.subtitle),
    abstract: getText(event.abstract),
    description: getText(event.description),
    type: getText(event.type),
    track: getText(event.track),
    date: date,
    room: room,
    persons: persons,
    links: links
  })
}

module.exports = async function () {
  const response = await axios.get(process.env.FOSDEM_SCHEDULE_URL)

  const json = xmltojson.parseString(response.data, {attrKey: '', textKey: 'text', valueKey: 'value', attrsAsObject: false})

  const schedule = flattenAttributes(json.schedule)

  const events = []

  for (const d of schedule[0].day || []) {
    const date = d.date
    for (const r of d.room || []) {
      if (r.event && r.event.length > 0) {
        const room = r.name
        for (const e of r.event || []) {
          const event = createEvent(e, date, room)
          events.push(event)
        }
      }
    }
  }

  return { events }
}
