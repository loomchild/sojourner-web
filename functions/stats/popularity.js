const admin = require('firebase-admin')

async function fetchEvents (conference) {
  const file = await admin.storage().bucket().file(`conferences/${conference}.json`).download()
  const schedule = JSON.parse(file)

  const events = Object.fromEntries(schedule.events.map(event => ([event.id, event])))

  return events
}

module.exports = async function (conference) {
  let userCount = 0
  let userCountActive = 0
  let maxFavourites = 0
  let averageFavourites = 0
  const favouriteCounts = {}
  const favouriteOccurences = {}
  const trackOccurences = {}

  const snapshot = await admin.firestore().collection('users').get()
  const events = await fetchEvents(conference)

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

    const tracks = new Set()
    for (const favourite of favourites) {
      favouriteOccurences[favourite] = (favouriteOccurences[favourite] || 0) + 1

      const event = events[favourite]
      if (event && event.track) {
        const track = event.track.startsWith('Main Track') || event.track === 'Keynotes' ? 'Main Track & Keynotes' : event.track
        tracks.add(track)
      }
    }

    for (const track of tracks) {
      trackOccurences[track] = (trackOccurences[track] || 0) + 1
    }
  }

  averageFavourites = userCount > 0 ? Math.round(averageFavourites / userCount * 100) / 100 : 0

  console.log(`Users: ${userCount}`)
  console.log(`Users Active 5+: ${userCountActive}`)
  console.log(`Max Favourites: ${maxFavourites}`)
  console.log(`Average Favourites: ${averageFavourites}`)

  const popularEvents = Object.entries(favouriteOccurences)
    .map(([favourite, count]) => ({ count, event: events[favourite] }))
    .sort((l, r) => r.count - l.count)

  console.log('\nMost popular talks:')
  for (let i = 0; i < 13; ++i) {
    const { count, event } = popularEvents[i]

    const place = `${i + 1}`.padStart(2, ' ')
    const result = `${count} users`.padStart(9, ' ')
    const title = event.subtitle ? `${event.title} / ${event.subtitle}` : event.title
    const speakers = event.persons.join(', ')

    console.log(`${place}. [${result}] ${title} (${event.track}) (${speakers})`)
  }

  const popularTracks = Object.entries(trackOccurences)
    .map(([track, count]) => ({ track, count }))
    .sort((l, r) => r.count - l.count)

  console.log('\nMost popular tracks:')
  for (let i = 0; i < 13; ++i) {
    const { count, track } = popularTracks[i]
    const place = `${i + 1}`.padStart(2, ' ')
    const result = `${count} users`.padStart(9, ' ')

    console.log(`${place}. [${result}] ${track}`)
  }
}
