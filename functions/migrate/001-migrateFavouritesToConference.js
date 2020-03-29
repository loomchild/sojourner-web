const admin = require('firebase-admin')

module.exports = async function () {
  const snapshot = await admin.firestore().collection('users').get()
  for (const doc of snapshot.docs) {
    const user = doc.data()
    if (user.favourites) {
      const favouriteStrings = user.favourites.map(f => f.toString())
      await doc.ref.update({
        'fosdem-2019': { favourites: favouriteStrings },
        favourites: admin.firestore.FieldValue.delete()
      })
    }
  }
}
