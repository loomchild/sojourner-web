import Vue from 'vue'
import { updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

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
      await updateDoc(user, { [getters.favouritesPath]: arrayUnion(eventId) })
    },

    async setExistingFavourites ({ state, dispatch, getters }) {
      const existingFavourites = Object.keys(state.favourites).map(eventId => eventId)
      if (existingFavourites.length > 0) {
        const user = await dispatch('getUserRef')
        await updateDoc(user, { [getters.favouritesPath]: arrayUnion(...existingFavourites) })
      }
    },

    async unsetFavourite ({ dispatch, getters }, eventId) {
      const user = await dispatch('getUserRef')
      await updateDoc(user, { [getters.favouritesPath]: arrayRemove(eventId) })
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
