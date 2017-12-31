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

const toggleFavourite = (eventId) => {
  return isFavourite(eventId)
    .then(favourite => favourite ? unsetFavourite(eventId) : setFavourite(eventId))
}

const enablePersistence = () => {
  if (navigator.storage && navigator.storage.persist) {
    return navigator.storage.persist()
  } else {
    return Promise.resolve(false)
  }
}

const isPersistent = () => {
  if (navigator.storage && navigator.storage.persisted) {
    return navigator.storage.persisted()
  } else {
    return Promise.resolve(false)
  }
}

export {isFavourite, getFavourites, setFavourite, unsetFavourite, toggleFavourite, isPersistent, enablePersistence}
