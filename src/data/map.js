import Building from '../logic/Building'

export default {
  state: {
    buildings: {
      'J': new Building({name: 'J'}),
      'H': new Building({name: 'H'}),
      'AW': new Building({name: 'AW'}),
      'U': new Building({name: 'U'}),
      'K': new Building({name: 'K'})
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
