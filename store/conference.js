import config from '@/config'

export default {
  state: {
    conferenceId: null
  },

  getters: {
    defaultConferenceEdition: () => config.conference.editions[0],

    defaultConferenceId: (state, getters) => `${config.conference.id}-${getters.defaultConferenceEdition.id}`,

    conferenceId: state => state.conferenceId,

    conferenceName: (state, getters) => getters.defaultConferenceEdition.name,

    conferenceScheduleUrl: (state, getters) => `https://firebasestorage.googleapis.com/v0/b/sojourer-web.appspot.com/o/conferences%2F${getters.conferenceId}.json?alt=media`
  },

  mutations: {
    setConferenceId (state, conferenceId) {
      state.conferenceId = conferenceId
    }
  },

  actions: {
    initConference ({ commit, getters }, conferenceId) {
      if (!conferenceId) {
        conferenceId = getters.defaultConferenceId
      }
      commit('setConferenceId', conferenceId)
    }
  }
}
