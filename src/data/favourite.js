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
          return localforage.iterate((value, key) => {
            dispatch('setFavourite', key)
            return undefined // required to not break the iteration
          })
            .then(() => localforage.setItem('migrated', true))
        }
      })
    },

    setFavourite ({commit, dispatch}, eventId) {
      dispatch('warnAboutLosingData')
      return dispatch('getUserRef')
        .then(user => user.update({favourites: firebase.firestore.FieldValue.arrayUnion(Number(eventId))}))
    },

    unsetFavourite ({commit, dispatch}, eventId) {
      dispatch('warnAboutLosingData')
      return dispatch('getUserRef')
        .then(user => user.update({favourites: firebase.firestore.FieldValue.arrayRemove(Number(eventId))}))
    },

    toggleFavourite ({commit, state, dispatch}, eventId) {
      if (state.favourites[eventId]) {
        return dispatch('unsetFavourite', eventId)
      } else {
        return dispatch('setFavourite', eventId)
      }
    }
  }
}
