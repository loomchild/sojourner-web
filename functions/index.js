if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { isAdmin } = require('./auth')
const fetchFosdem = require('./fetch/fosdem')
// const fetchSched = require('./fetch/sched')
const store = require('./store')
const adminUsers = require('./admin/users')
const adminFavourites = require('./admin/favourites')

admin.initializeApp({
  storageBucket: 'sojourer-web.appspot.com'
})

exports.storeFosdem = functions.pubsub.schedule('every 3 hours').onRun(async (context) => {
  const fosdemConfig = functions.config().fosdem
  const year = fosdemConfig.year
  const fosdemData = await fetchFosdem(`https://fosdem.org/${year}/schedule/xml`, { year, dates: fosdemConfig.dates.split(',') })
  await store(fosdemData, `fosdem-${year}.json`)
})

/*
exports.storeFlowcon = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const flowconData = await fetchSched(functions.config().flowcon.url, functions.config().flowcon.key)
  await store(flowconData, 'flowcon-2019.json')
})
*/

/*
const popularity = require('./stats/popularity')
exports.statPopularity2023 = functions.pubsub.schedule('never').onRun(async (context) => {
  await popularity('fosdem-2023')
})
exports.statPopularity2022 = functions.pubsub.schedule('never').onRun(async (context) => {
  await popularity('fosdem-2022')
})
exports.statPopularity2021 = functions.pubsub.schedule('never').onRun(async (context) => {
  await popularity('fosdem-2021')
})
exports.statPopularity2020 = functions.pubsub.schedule('never').onRun(async (context) => {
  await popularity('fosdem-2020')
})
exports.statPopularity2019 = functions.pubsub.schedule('never').onRun(async (context) => {
  await popularity('fosdem-2019')
})
*/

/*
const migrate = require('./migrate/001-migrateFavouritesToConference')
exports.migrate = functions.pubsub.schedule('never').onRun(async (context) => {
  await migrate()
})
*/

exports.adminUsers = functions.https.onRequest(async (req, res) => {
  if (!isAdmin(req)) {
    res.status(403).send('Forbidden')
    return
  }

  const users = await adminUsers()

  res.status(200).send(users)
})

exports.adminFavourites = functions.https.onRequest(async (req, res) => {
  if (!isAdmin(req)) {
    res.status(403).send('Forbidden')
    return
  }

  const favourites = await adminFavourites(req.query.conference)

  res.status(200).send(favourites)
})
