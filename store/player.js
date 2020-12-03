export default {
  state: {
    playerEvent: null,

    currentEventId: null
  },

  getters: {
    playerEvent: (state) => state.playerEvent,

    dockedPlayer: (state) => state.playerEvent && state.playerEvent.id === state.currentEventId
  },

  mutations: {
    setPlayerEvent (state, playerEvent) {
      state.playerEvent = playerEvent
    },

    setCurrentEventId (state, currentEventId) {
      state.currentEventId = currentEventId
    }
  },

  actions: {
    play ({ commit, state, dispatch }, event) {
      if (!event) {
        dispatch('stop')
        return
      }

      if (state.playerEvent && state.playerEvent.id === event.id) {
        return
      }

      commit('setPlayerEvent', event)
    },

    stop ({ commit, state }) {
      if (!state.playerEvent) {
        return
      }

      commit('setPlayerEvent', null)
    },

    dockPlayer ({ commit }, eventId) {
      commit('setCurrentEventId', eventId)
    }
  }
}
