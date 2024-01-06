import { router } from '@/pages'

export default {
  state: {
    playerEvent: null,

    currentEventId: null,

    trackEventNotifiedId: null
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
    },

    setTrackEventNotifiedId (state, eventId) {
      state.trackEventNotifiedId = eventId
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
    },

    notifyTrackEvent ({ state, getters, commit, dispatch, rootGetters }) {
      if (!getters.dockedPlayer) {
        return
      }

      const playerEvent = state.playerEvent
      const trackEvent = rootGetters.liveTrackEvent(playerEvent.track.name)

      if (trackEvent && trackEvent.id !== playerEvent.id && trackEvent.startTime > playerEvent.startTime && state.trackEventNotifiedId !== trackEvent.id) {
        dispatch('showMessage', 'Advancing to currently streamed event in this track...')

        setTimeout(() => {
          commit('setPlayerEvent', trackEvent)
          router.push({ name: 'event', params: { eventId: trackEvent.id } })
        }, 5000)

        commit('setTrackEventNotifiedId', trackEvent.id)
      }
    }
  }
}
