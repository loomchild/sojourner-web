import Vue from 'vue'
import { updateDoc, arrayUnion, arrayRemove, serverTimestamp } from 'firebase/firestore'

import { router } from '@/pages'

export default {
  state: {
    favourites: {},

    favouriteTracks: {}
  },

  getters: {
    favourites: (state) => state.favourites,

    favouriteTracks: (state) => state.favouriteTracks,

    favouritesPath: (state, getters, rootState, rootGetters) => `${rootGetters.conferenceId}.favourites`,

    favouriteUpdatesPath: (state, getters, rootState, rootGetters) => `${rootGetters.conferenceId}.favouriteUpdates`,

    favouriteTracksPath: (state, getters, rootState, rootGetters) => `${rootGetters.conferenceId}.favouriteTracks`
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
    },

    setFavouriteTracks (state, favourites) {
      state.favouriteTracks = favourites
    },

    setFavouriteTrack (state, trackName) {
      Vue.set(state.favouriteTracks, trackName, true)
    },

    unsetFavouriteTrack (state, trackName) {
      Vue.delete(state.favouriteTracks, trackName)
    }
  },

  actions: {
    async setFavourite ({ dispatch, getters }, eventId) {
      const user = await dispatch('getUserRef')
      await updateDoc(user, { [getters.favouritesPath]: arrayUnion(eventId) })
      dispatch('touchFavourites', eventId)
    },

    async setExistingFavourites ({ state, dispatch, getters }) {
      const existingFavourites = Object.keys(state.favourites).map(eventId => eventId)
      if (existingFavourites.length > 0) {
        const user = await dispatch('getUserRef')
        await updateDoc(user, { [getters.favouritesPath]: arrayUnion(...existingFavourites) })
        dispatch('touchFavourites', existingFavourites)
      }
    },

    async unsetFavourite ({ dispatch, getters }, eventId) {
      const user = await dispatch('getUserRef')
      await updateDoc(user, { [getters.favouritesPath]: arrayRemove(eventId) })
      dispatch('touchFavourites', eventId)
    },

    async touchFavourites ({ dispatch, getters }, eventIds) {
      const update = {}
      for (const eventId of Array.isArray(eventIds) ? eventIds : [eventIds]) {
        update[`${getters.favouriteUpdatesPath}.${eventId}`] = serverTimestamp()
      }

      const user = await dispatch('getUserRef')
      await updateDoc(user, update)
    },

    toggleFavourite ({ state, dispatch }, eventId) {
      if (state.favourites[eventId]) {
        return dispatch('unsetFavourite', eventId)
      } else {
        return dispatch('setFavourite', eventId)
      }
    },

    async setFavouriteTrack ({ dispatch, getters }, trackName) {
      const user = await dispatch('getUserRef')
      await updateDoc(user, { [getters.favouriteTracksPath]: arrayUnion(trackName) })
    },

    async setExistingFavouriteTracks ({ state, dispatch, getters }) {
      const existingFavouriteTracks = Object.keys(state.favouriteTracks).map(trackName => trackName)
      if (existingFavouriteTracks.length > 0) {
        const user = await dispatch('getUserRef')
        await updateDoc(user, { [getters.favouriteTracksPath]: arrayUnion(...existingFavouriteTracks) })
      }
    },

    async unsetFavouriteTrack ({ dispatch, getters }, trackName) {
      const user = await dispatch('getUserRef')
      await updateDoc(user, { [getters.favouriteTracksPath]: arrayRemove(trackName) })
    },

    toggleFavouriteTrack ({ state, dispatch }, trackName) {
      if (state.favouriteTracks[trackName]) {
        return dispatch('unsetFavouriteTrack', trackName)
      } else {
        return dispatch('setFavouriteTrack', trackName)
      }
    },

    async shareFavourites ({ state, dispatch }) {
      const eventIds = Object.keys(state.favourites).join(',')
      const route = router.resolve({ name: 'shared-events', query: { eventIds } })
      const url = new URL(route.href, window.location.origin).href

      if ('share' in navigator) {
        await navigator.share({ url })
      } else {
        await navigator.clipboard.writeText(url)
      }

      dispatch('showMessage', 'Copied share link to the clipboard')
    }
  }
}
