import Vue from 'vue'
import localforage from 'localforage'

export default {
  state: {
    favouritesInitialized: false,
    favourites: {},
    persistent: false
  },

  getters: {
    favouritesInitialized: (state) => state.favouritesInitialized,

    favourites: (state) => state.favourites,

    persistent: (state) => state.persistent
  },

  mutations: {
    initializeFavourites (state) {
      state.favouritesInitialized = true
    },

    setFavourites (state, favourites) {
      state.favourites = favourites
    },

    setFavourite (state, eventId) {
      Vue.set(state.favourites, eventId, true)
    },

    unsetFavourite (state, eventId) {
      Vue.delete(state.favourites, eventId)
    },

    setPersistent (state, persistent) {
      state.persistent = persistent
    }
  },

  actions: {
    initFavourites ({commit, dispatch}) {
      localforage.config({
        name: 'Sojourner Events'
      })

      const favourites = {}
      return localforage.iterate((value, key) => {
        favourites[key] = true
      })
        .then(() => commit('setFavourites', favourites))
        .then(() => dispatch('isPersistent'))
        .then(persistent => commit('setPersistent', persistent))
        .then(() => commit('initializeFavourites'))
    },

    persist () {
      if (navigator.storage && navigator.storage.persist) {
        return navigator.storage.persist()
      } else {
        return Promise.resolve(false)
      }
    },

    isPersistent () {
      if (navigator.storage && navigator.storage.persisted) {
        return navigator.storage.persisted()
      } else {
        return Promise.resolve(false)
      }
    },

    setFavourite ({commit}, eventId) {
      return localforage.setItem(eventId, true)
        .then(() => commit('setFavourite', eventId))
    },

    unsetFavourite ({commit}, eventId) {
      return localforage.removeItem(eventId)
        .then(() => commit('unsetFavourite', eventId))
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
