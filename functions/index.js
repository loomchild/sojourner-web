if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const fetchFosdem = require('./fetch/fosdem')
// const fetchSched = require('./fetch/sched')
const store = require('./store')

admin.initializeApp({
  storageBucket: 'sojourer-web.appspot.com'
})

exports.storeFosdem = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const fosdemData = await fetchFosdem(functions.config().fosdem.url)
  await store(fosdemData, 'fosdem-2021.json')
})

/*
exports.storeFlowcon = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const flowconData = await fetchSched(functions.config().flowcon.url, functions.config().flowcon.key)
  await store(flowconData, 'flowcon-2019.json')
})
*/

const popularity = require('./stats/popularity')
exports.statPopularity = functions.pubsub.schedule('never').onRun(async (context) => {
  await popularity('fosdem-2021')
})

/*
const migrate = require('./migrate/001-migrateFavouritesToConference')
exports.migrate = functions.pubsub.schedule('never').onRun(async (context) => {
  await migrate()
})
*/
