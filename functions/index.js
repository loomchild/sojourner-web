if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { isAdmin } = require('./auth')
const adminUsers = require('./admin/users')
const adminFavourites = require('./admin/favourites')

admin.initializeApp({
  storageBucket: 'sojourer-web.appspot.com'
})


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
