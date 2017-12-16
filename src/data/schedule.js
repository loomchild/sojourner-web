import xmltojson from 'xmltojson'
import firstBy from 'thenby'

import xml from './schedule.xml'
import Event from '../logic/Event'

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

const parseSchedule = () => {
  const json = xmltojson.parseString(xml, {attrKey: '', textKey: 'text', valueKey: 'value', attrsAsObject: false})

  const schedule = flattenAttributes(json.schedule)

  return schedule
}

let schedule = null

const refreshShedule = () => {
  schedule = parseSchedule()
}

const getSchedule = () => {
  if (schedule == null) {
    refreshShedule()
  }

  return schedule
}

const getAllEvents = () => {
  const schedule = getSchedule()

  const events = []

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
          persons: event.persons[0].person.map(person => person.text)
        }
        events.push(new Event(eventData))
      }
    }
  }

  return events.sort(firstBy('day').thenBy('start'))
}

export {getSchedule, refreshShedule, getAllEvents}
