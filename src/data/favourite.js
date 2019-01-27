import Vue from 'vue'
import firebase from 'firebase/app'
import localforage from 'localforage'

export default {
  state: {
    favourites: {}
  },

  getters: {
    favourites: (state) => state.favourites
  },

  mutations: {
    setFavourites (state, favourites) {
      state.favourites = favourites
    },

    setFavourite (state, eventId) {
      Vue.set(state.favourites, eventId, true)
    },

    unsetFavourite (state, eventId) {
      Vue.delete(state.favourites, eventId)
    }
  },

  actions: {
    migrateLegacyFavourites ({dispatch}) {
      localforage.config({
        name: 'Sojourner Events'
      })

      return Promise.all([
        localforage.length(),
        localforage.getItem('migrated')
      ]).then(([length, migrated]) => {
        if (length > 0 && !migrated) {
          console.log('Migrating legacy storage')
          return dispatch('getUserRef')
            .then(() => {
              localforage.iterate((value, key) => {
                dispatch('setFavourite', key)
                return undefined // required to not break the iteration
              })
            })
            .then(() => localforage.setItem('migrated', true))
        }
      })
    },

    setFavourite ({dispatch}, eventId) {
      dispatch('warnAboutLosingData')
      return dispatch('getUserRef')
        .then(user => user.update({favourites: firebase.firestore.FieldValue.arrayUnion(Number(eventId))}))
    },

    setExistingFavourites ({state, dispatch}) {
      const existingFavourites = Object.keys(state.favourites).map(eventId => Number(eventId))
      if (existingFavourites.length > 0) {
        return dispatch('getUserRef')
          .then(user => user.update({favourites: firebase.firestore.FieldValue.arrayUnion(...existingFavourites)}))
      }
    },

    unsetFavourite ({dispatch}, eventId) {
      dispatch('warnAboutLosingData')
      return dispatch('getUserRef')
        .then(user => user.update({favourites: firebase.firestore.FieldValue.arrayRemove(Number(eventId))}))
    },

    toggleFavourite ({state, dispatch}, eventId) {
      if (state.favourites[eventId]) {
        return dispatch('unsetFavourite', eventId)
      } else {
        return dispatch('setFavourite', eventId)
      }
    }
  }
}
