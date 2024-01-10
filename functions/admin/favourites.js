const admin = require('firebase-admin')
const { hashUid } = require('./common')

module.exports = async function (conference) {
  const snapshot = await admin.firestore().collection('users').where(`${conference}.favourites`, '!=', []).get()

  const users = {}

  for (const doc of snapshot.docs) {
    const user = doc.data()

    const favourites = {}

    for (const favourite of user[conference].favourites) {
      favourites[favourite] = {}

      if (user[conference].favouriteUpdates) {
        const updatedAt = user[conference].favouriteUpdates[favourite]
        if (updatedAt) {
          favourites[favourite].updatedAt = updatedAt.toDate().toISOString()
        }
      }
    }

    users[hashUid(doc.id)] = {
      favourites
    }
  }

  return users
}
