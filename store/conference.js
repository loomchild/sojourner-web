import config from '@/config'

export default {
  state: {
    conferenceEdition: null,

    conferenceId: null
  },

  getters: {
    conferenceEdition: (state, getters) => state.conferenceEdition,

    conferenceId: state => state.conferenceId,

    conferenceName: (state, getters) => getters.conferenceEdition ? getters.conferenceEdition.name : '',

    conferenceScheduleUrl: state => {
      return `https://firebasestorage.googleapis.com/v0/b/sojourer-web.appspot.com/o/conferences%2F${state.conferenceId}.json?alt=media`
    }
  },

  mutations: {
    setConferenceEdition (state, edition) {
      state.conferenceEdition = edition
      state.conferenceId = edition ? `${config.conference.id}-${edition.id}` : null
    }
  },

  actions: {
    initConference ({ commit, getters }, editionId) {
      const editions = config.conference.editions
      const edition = editionId ? editions.find(edition => edition.id === editionId) : editions[0]
      commit('setConferenceEdition', edition)
    }
  }
}
