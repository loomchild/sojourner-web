import config from '@/config'
import { router } from '@/pages'

export default {
  state: {
    conferenceEdition: null,

    conferenceId: null
  },

  getters: {
    conferenceEdition: (state, getters) => state.conferenceEdition,

    latestConferenceEdition: () => config.conference.editions[0],

    allConferenceEditions: () => config.conference.editions,

    isLatestConferenceEdition: (state, getters) => state.conferenceEdition === getters.latestConferenceEdition,

    conferenceId: state => state.conferenceId,

    conferenceName: (state, getters) => getters.conferenceEdition ? getters.conferenceEdition.name : '',

    conferenceScheduleUrl: state => {
      return `${config.conference.urlPrefix}/conferences/${state.conferenceId}.json`
    }
  },

  mutations: {
    setConferenceEdition (state, edition) {
      state.conferenceEdition = edition
      state.conferenceId = edition ? `${config.conference.id}-${edition.id}` : null
    }
  },

  actions: {
    initConference ({ commit, getters, dispatch }, editionId) {
      const edition = editionId ? config.conference.editions.find(edition => edition.id === editionId) : getters.latestConferenceEdition
      commit('setConferenceEdition', edition)

      if (edition && !getters.isLatestConferenceEdition) {
        dispatch(
          'showNotification',
          {
            message: 'You are browsing past conference edition.',
            timeout: -1,
            button: {
              title: 'GO TO CURRENT',
              handler: () => {
                dispatch('switchConferenceEdition', getters.latestConferenceEdition.id)
                router.push({ name: 'dashboard', params: { editionId: getters.latestConferenceEdition.id } })
              }
            }
          },
          { root: true }
        )
      }
    }
  }
}
