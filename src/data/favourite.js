import localforage from 'localforage'

const init = () => {
  localforage.config({
    name: 'Sojourner Events'
  })
}

init()

const isFavourite = (eventId) => {
  return localforage.getItem(eventId)
    .then(favourite => !!favourite)
}

const getFavourites = () => {
  const favourites = {}
  return localforage.iterate((value, key) => {
    favourites[key] = true
  }).then(() => favourites)
}

const setFavourite = (eventId) => {
  return localforage.setItem(eventId, true)
}

const unsetFavourite = (eventId) => {
  return localforage.removeItem(eventId)
}

export {isFavourite, getFavourites, setFavourite, unsetFavourite}
