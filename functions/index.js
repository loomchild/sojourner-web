require('dotenv').config()

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const fetchFosdem = require('./fetch/fosdem')
const store = require('./store')

admin.initializeApp({
  storageBucket: 'sojourer-web.appspot.com'
})

exports.storeFosdem = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const fosdemData = await fetchFosdem()
  await store(fosdemData, 'fosdem-2019.json')
})
