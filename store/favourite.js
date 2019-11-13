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
      return dispatch('assurePersistent')
        .then(() => dispatch('getUserRef'))
        .then(user => user.update({[`${process.env.CONFERENCE_ID}.favourites`]: firebase.firestore.FieldValue.arrayUnion(eventId)}))
    },

    setExistingFavourites ({state, dispatch}) {
      const existingFavourites = Object.keys(state.favourites).map(eventId => eventId)
      if (existingFavourites.length > 0) {
        return dispatch('getUserRef')
          .then(user => user.update({[`${process.env.CONFERENCE_ID}.favourites`]: firebase.firestore.FieldValue.arrayUnion(...existingFavourites)}))
      }
    },

    unsetFavourite ({dispatch}, eventId) {
      return dispatch('assurePersistent')
        .then(() => dispatch('getUserRef'))
        .then(user => user.update({[`${process.env.CONFERENCE_ID}.favourites`]: firebase.firestore.FieldValue.arrayRemove(eventId)}))
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
