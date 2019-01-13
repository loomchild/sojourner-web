'use strict'

const config = {
  timestamp: TIMESTAMP,
  commithash: 'unknown',
  scheduleUrl: 'https://fosdem.loomchild.net/2019/schedule/xml',
  roomStateUrl: 'https://fosdem.loomchild.net/listrooms'
}

module.exports = Object.assign(config, process.env.NODE_ENV
  ? require(`./config-${process.env.NODE_ENV}.js`)
  : require('./config-development.js'))
