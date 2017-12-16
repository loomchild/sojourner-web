import localforage from 'localforage'

const init = () => {
  localforage.config({
    name: 'Sojourner Events'
  })
}

init()

const setFavourite = (eventId) => {
  return localforage.setItem(eventId, true)
}

const unsetFavourite = (eventId) => {
  return localforage.removeItem(eventId)
}

const getFavourites = () => {
  const favourites = {}
  return localforage.iterate((value, key) => { favourites[key] = true })
    .then(() => favourites)
}

export {setFavourite, unsetFavourite, getFavourites}
