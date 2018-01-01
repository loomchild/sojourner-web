import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null
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
})
