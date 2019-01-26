import Vue from 'vue'

export default {
  state: {
    favouritesInitialized: false,
    favourites: {}
  },

  getters: {
    favouritesInitialized: (state) => state.favouritesInitialized,

    favourites: (state) => state.favourites
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
        .then(() => commit('initializeFavourites'))
    },

    setFavourite ({commit, dispatch}, eventId) {
      commit('setFavourite', eventId)
      dispatch('warnAboutLosingData')
      return dispatch('getUserData')
        .then(userData => userData.collection('favourites').doc(eventId).set({}))
    },

    unsetFavourite ({commit, dispatch}, eventId) {
      commit('unsetFavourite', eventId)
      dispatch('warnAboutLosingData')
      return dispatch('getUserData')
        .then(userData => userData.collection('favourites').doc(eventId).delete())
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
