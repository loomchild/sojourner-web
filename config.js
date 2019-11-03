'use strict'

const config = {}

module.exports = Object.assign(config, process.env.NODE_ENV
  ? require(`./config-${process.env.NODE_ENV}.js`)
  : require('./config-development.js'))
