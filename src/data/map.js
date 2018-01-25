import Building from '../logic/Building'

export default {
  state: {
    buildings: {
      'j': new Building({name: 'j'})
    },

    zoomTipShown: false
  },

  getters: {
    buildings: state => state.buildings,

    roomBuilding: state => roomName => Object.values(state.buildings).filter(building => building.containsRoom(roomName))[0],

    zoomTipShown: state => state.zoomTipShown
  },

  mutations: {
    setZoomTipShown (state, zoomTipShown) {
      state.zoomTipShown = zoomTipShown
    }
  },

  actions: {
    showZoomTip ({commit, state, dispatch}) {
      if (!state.zoomTipShown) {
        dispatch('showNotification', {
          message: 'Click on a building to zoom in',
          color: 'info',
          timeout: 10000
        })
        commit('setZoomTipShown', true)
      }
    }
  }

}
