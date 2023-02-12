const admin = require('firebase-admin')

module.exports = async function (conference) {
  let userCount = 0
  let userCountActive = 0
  let maxFavourites = 0
  let averageFavourites = 0;
  const favouriteCounts = {}
  const snapshot = await admin.firestore().collection('users').get()
  for (const doc of snapshot.docs) {
    const user = doc.data()
    const favourites = (user[conference] && user[conference].favourites) || []
    const favouriteCount = favourites.length
    favouriteCounts[favouriteCount] = (favouriteCounts[favouriteCount] || 0) + 1
    if (favouriteCount > 0) {
      userCount++
      averageFavourites += favouriteCount
    }
    if (favouriteCount >= 5) {
      userCountActive++
    }
    if (favouriteCount > maxFavourites) {
      maxFavourites = favouriteCount
    }
  }
  averageFavourites = userCount > 0 ? Math.round(averageFavourites / userCount * 100) / 100 : 0

  console.log(`Users: ${userCount}`)
  console.log(`Users Active 5+: ${userCountActive}`)
  console.log(`Max Favourites: ${maxFavourites}`)
  console.log(`Average Favourites: ${averageFavourites}`)
}
