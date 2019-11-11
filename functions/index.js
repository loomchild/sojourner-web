require('dotenv').config()

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const fetchFosdem = require('./fetch/fosdem')
const fetchSched = require('./fetch/sched')
const store = require('./store')

admin.initializeApp({
  storageBucket: 'sojourer-web.appspot.com'
})

exports.storeFosdem = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const fosdemData = await fetchFosdem(process.env.FOSDEM_SCHEDULE_URL)
  await store(fosdemData, 'fosdem-2019.json')
})

exports.storeFlowcon = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const flowconData = await fetchSched(process.env.FLOWCON_SCHEDULE_URL, process.env.FLOWCON_SCHEDULE_KEY)
  await store(flowconData, 'flowcon-2019.json')
})
