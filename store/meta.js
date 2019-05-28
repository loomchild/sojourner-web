export default {
  state: {
    title: null,

    drawer: null
  },

  getters: {
    title: state => state.title,

    drawer: state => state.drawer
  },

  mutations: {
    setTitle (state, title) {
      state.title = title
    },

    setDrawer (state, drawer) {
      state.drawer = drawer
    }
  },

  actions: {
    setTitle ({commit}, title) {
      commit('setTitle', title)
    },

    setDrawer ({commit}, drawer) {
      commit('setDrawer', drawer)
    },

    toggleDrawer ({commit, state}) {
      commit('setDrawer', !state.drawer)
    }
  }
}
