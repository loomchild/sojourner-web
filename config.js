'use strict'

const config = {
  scheduleUrl: 'https://firebasestorage.googleapis.com/v0/b/sojourer-web.appspot.com/o/conferences%2Ffosdem-2019.json?alt=media',
  roomStateUrl: 'https://fosdem.loomchild.net/listrooms'
}

module.exports = Object.assign(config, process.env.NODE_ENV
  ? require(`./config-${process.env.NODE_ENV}.js`)
  : require('./config-development.js'))
