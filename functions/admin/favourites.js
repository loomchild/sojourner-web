const admin = require('firebase-admin')
const { hashUid } = require('./common')

module.exports = async function (conference) {
  const snapshot = await admin.firestore().collection('users').where(`${conference}.favourites`, '!=', []).get()

  const users = {}

  for (const doc of snapshot.docs) {
    const user = doc.data()
    const favourites = user[conference].favourites

    users[hashUid(doc.id)] = {
      favourites
    }
  }

  return users
}
