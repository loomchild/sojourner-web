const axios = require('axios')
const moment = require('moment')
const Event = require('../logic/Event')
const Type = require('../logic/Type')
const Link = require('../logic/Link')

const LINKS = {
  '0d2ca077208b59fd4b61429113dfc573': 'https://www.youtube.com/watch?v=39u-WHz-9Cg&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=1',
  '24911718a8cb47100861344e6f911a90': 'https://www.youtube.com/watch?v=D7GNBYjMxBw&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=2',
  'dc2100463b0a8f11c79a162a320fbd72': 'https://www.youtube.com/watch?v=NfyURsZ17l8&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=3',
  'e35739aa2946c4d2c623c8b832f57b56': 'https://www.youtube.com/watch?v=E88pnHQAfm0&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=4',
  '52d9910ec3d4907fbb435bf654adf23f': 'https://www.youtube.com/watch?v=P0VMDomQxQk&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=5',
  '6b2e0479a790ae48f39191bbb3885ab9': 'https://www.youtube.com/watch?v=re5jkjxBhLo&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=6',
  '8031487dbf3f73a97600831e1cc16cce': 'https://www.youtube.com/watch?v=dEHtDfQTNcw&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=7',
  'b52dd88c2863e9cd65dbf5ca0be2ed76': 'https://www.youtube.com/watch?v=YibNG8xx15c&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=9',
  '3ca106743d1187ca7f45d2843f95a45f': 'https://www.youtube.com/watch?v=RO8vg8MvAtE&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=10',
  'b565f20b2c946608b2b0a329c2a4c2af': 'https://www.youtube.com/watch?v=Fa6cNEB5BMI&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=11',
  '0fb691d344aa0d4d90e1b6be801d3f30': 'https://www.youtube.com/watch?v=iagaLj_HFCQ&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=12',
  'eaf18224a4a4a4956ddb7a767df822d0': 'https://www.youtube.com/watch?v=QsGL1RkmnyU&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=13',
  'e05d0c8e09d002308984f96ff3aa88f8': 'https://www.youtube.com/watch?v=dGKAwRodbjA&list=PLAqbkwjzg7IOr9yJlptM_jMdjIzSONY_1&index=14'
}

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

    const links = LINKS[e.id] ? [new Link({ title: 'Video', href: LINKS[e.id] })] : []

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
      language: e.event_subtype,
      links
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
