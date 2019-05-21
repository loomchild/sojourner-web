export default {
  state: {
    drawer: null
  },

  getters: {
    drawer: state => state.drawer
  },

  mutations: {
    setDrawer (state, drawer) {
      state.drawer = drawer
    }
  },

  actions: {
    setDrawer ({commit}, drawer) {
      commit('setDrawer', drawer)
    },

    toggleDrawer ({commit, state}) {
      commit('setDrawer', !state.drawer)
    }
  }
}
