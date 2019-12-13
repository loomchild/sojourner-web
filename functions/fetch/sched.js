const axios = require('axios')
const moment = require('moment')
const Event = require('../logic/Event')
const Type = require('../logic/Type')

module.exports = async function (scheduleUrl, scheduleKey) {
  const response = await axios.get(scheduleUrl, { params: { api_key: scheduleKey, format: 'json' } })

  const json = response.data

  const typeMap = {}

  const events = json.map((e) => {
    let startTime = moment(e.start_time, 'HH:mm:ss')
    const endTime = moment(e.end_time, 'HH:mm:ss')
    const duration = moment.utc(endTime.diff(startTime))

    const typeId = e.event_type.toLowerCase().replace(/[^[a-z0-9- ]/g, '').replace(/\s+/g, '-')
    let type = typeMap[typeId]
    if (!type) {
      type = {
        id: typeId,
        name: e.event_type,
        sort: e.event_type_sort
      }
      typeMap[typeId] = type
    }

    const room = e.venue.replace(/\s*-\s*\d+p$/, '')

    if (e.id === '96cce7536d74ad22419502c2eef111b8') {
      startTime = '10:45'
    } else if (e.id === '32c6a1d7165d6c8f992a0ad2d4728cd6') {
      startTime = '15:00'
    } else {
      startTime = startTime.format('HH:mm')
    }

    return new Event({
      id: e.id,
      date: e.start_date,
      startTime,
      duration: duration.format('HH:mm'),
      title: e.name,
      description: e.description,
      type: typeId,
      track: type.name,
      room,
      persons: e.speakers ? e.speakers.map(speaker => speaker.name) : [],
      language: e.event_subtype
    })
  })

  const types = Object.values(typeMap)
    .sort((l, r) => l.sort - r.sort)
    .map(t => new Type({
      id: t.id,
      name: t.name,
      statName: 'events'
    }))

  return { types, events }
}
