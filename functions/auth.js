const functions = require('firebase-functions')

function isAdmin (req) {
  const token = (req.headers.authorization || '').split(' ')[1]

  if (!token || token !== functions.config().admin.token) {
    return false
  }

  return true
}

module.exports = { isAdmin }
