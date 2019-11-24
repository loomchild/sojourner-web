const admin = require('firebase-admin')

module.exports = async function (conference) {
  let userCount = 0
  const favouriteCounts = {}
  const snapshot = await admin.firestore().collection('users').get()
  for (let doc of snapshot.docs) {
    const user = doc.data()
    userCount++
    const favourites = (user[conference] && user[conference].favourites) || []
    let favouriteCount = favourites.length
    favouriteCounts[favouriteCount] = (favouriteCounts[favouriteCount] || 0) + 1
  }
  console.log(`Users: ${userCount}`)
  for (let favouriteCount of Object.keys(favouriteCounts).sort((l, r) => Number(l) - Number(r)).reverse()) {
    console.log(`${favouriteCount} favourites: ${favouriteCounts[favouriteCount]} users`)
  }
}
