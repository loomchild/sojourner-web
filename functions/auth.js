const functions = require('firebase-functions')
const { HttpsError } = functions.https

function isAuthenticated (context) {
  return !!context.auth
}

function isAdmin (context) {
  return isAuthenticated(context) && !!context.auth.token.admin
}

function assureAuthenticated (context) {
  if (!isAuthenticated(context)) {
    throw new HttpsError('unauthenticated', 'Authentication required')
  }
}

function assureAdmin (context) {
  assureAuthenticated(context)
  if (!isAdmin(context)) {
    throw new HttpsError('permission-denied', 'Permission denied')
  }
}

module.exports = { assureAdmin, assureAuthenticated }
