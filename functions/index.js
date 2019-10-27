const express = require('express')
const cors = require('cors')
const functions = require('firebase-functions')
const { errorHandler, asyncHandler } = require('./errors')
const fetchFosdem = require('./fetchFosdem')

const api = express()
api.use(cors({ origin: true }))

api.get('/fosdem', asyncHandler(async (request, response) => {
  const schedule = await fetchFosdem()
  response.json(schedule)
}))

api.use(errorHandler)

exports.schedule = functions.https.onRequest(api)
