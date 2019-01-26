import Vue from 'vue'

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
      const favourites = {}

      return dispatch('getUserData')
        .then(userData => userData.collection('favourites').get())
        .then(snapshot => {
          snapshot.docs.forEach(favourite => {
            favourites[favourite.id] = true
          })
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

    setFavourite ({commit, dispatch}, eventId) {
      dispatch('getUserData')
        .then(userData => userData.collection('favourites').doc(eventId).set({}))
        .then(() => commit('setFavourite', eventId))
    },

    unsetFavourite ({commit, dispatch}, eventId) {
      dispatch('getUserData')
        .then(userData => userData.collection('favourites').doc(eventId).delete())
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
