import Vue from 'vue'
import firebase from 'firebase/app'

export default {
  state: {
    favourites: {}
  },

  getters: {
    favourites: (state) => state.favourites,

    favouritesPath: (state, getters, rootState, rootGetters) => `${rootGetters.conferenceId}.favourites`
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
    async setFavourite ({ dispatch, getters }, eventId) {
      const user = await dispatch('getUserRef')
      await user.update({ [getters.favouritesPath]: firebase.firestore.FieldValue.arrayUnion(eventId) })
    },

    async setExistingFavourites ({ state, dispatch, getters }) {
      const existingFavourites = Object.keys(state.favourites).map(eventId => eventId)
      if (existingFavourites.length > 0) {
        const user = await dispatch('getUserRef')
        await user.update({ [getters.favouritesPath]: firebase.firestore.FieldValue.arrayUnion(...existingFavourites) })
      }
    },

    async unsetFavourite ({ dispatch, getters }, eventId) {
      const user = await dispatch('getUserRef')
      await user.update({ [getters.favouritesPath]: firebase.firestore.FieldValue.arrayRemove(eventId) })
    },

    toggleFavourite ({ state, dispatch }, eventId) {
      if (state.favourites[eventId]) {
        return dispatch('unsetFavourite', eventId)
      } else {
        return dispatch('setFavourite', eventId)
      }
    }
  }
}
