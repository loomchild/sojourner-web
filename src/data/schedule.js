import xmltojson from 'xmltojson'
import firstBy from 'thenby'

import Event from '../logic/Event'

const SCHEDULE_URL = 'https://fosdem.loomchild.net/2018/schedule/xml'

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

const getText = (element) => element[0] && element[0].text && element[0].text[0] !== null ? element[0].text : undefined

const fetchSchedule = () => {
  return fetch(SCHEDULE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      return response.text()
    })
}

const getSchedule = () => {
  return fetchSchedule()
    .then(xml => {
      const json = xmltojson.parseString(xml, {attrKey: '', textKey: 'text', valueKey: 'value', attrsAsObject: false})

      const schedule = flattenAttributes(json.schedule)

      return schedule
    })
}

let events = null

const refreshSchedule = () => {
  events = null
}

const getAllEvents = () => {
  if (events != null) {
    return Promise.resolve(events)
  }

  return getSchedule()
    .then(schedule => {
      events = []

      for (const day of schedule[0].day || []) {
        for (const room of day.room || []) {
          for (const event of room.event || []) {
            const eventData = {
              id: event.id.toString(),
              start: getText(event.start),
              duration: getText(event.duration),
              title: getText(event.title),
              subtitle: getText(event.subtitle),
              abstract: getText(event.abstract),
              description: getText(event.description),

              type: getText(event.type),
              track: getText(event.track),
              day: day.index,
              room: room.name,
              persons: event.persons[0].person ? event.persons[0].person.map(person => person.text) : []
            }
            events.push(new Event(eventData))
          }
        }
      }

      events = events.sort(firstBy('day').thenBy('start'))
      return events
    })
}

export {getSchedule, refreshSchedule, getAllEvents}
