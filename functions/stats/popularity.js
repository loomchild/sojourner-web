const admin = require('firebase-admin')

module.exports = async function (conference) {
  let userCount = 0
  let userCountActive = 0
  const favouriteCounts = {}
  const snapshot = await admin.firestore().collection('users').get()
  for (const doc of snapshot.docs) {
    const user = doc.data()
    userCount++
    const favourites = (user[conference] && user[conference].favourites) || []
    const favouriteCount = favourites.length
    favouriteCounts[favouriteCount] = (favouriteCounts[favouriteCount] || 0) + 1
    if (favouriteCount >= 5) {
      userCountActive++
    }
  }
  console.log(`Users: ${userCount}`)
  console.log(`Users Active 5+: ${userCountActive}`)
  for (const favouriteCount of Object.keys(favouriteCounts).sort((l, r) => Number(l) - Number(r)).reverse()) {
    console.log(`${favouriteCount} favourites: ${favouriteCounts[favouriteCount]} users`)
  }
}
