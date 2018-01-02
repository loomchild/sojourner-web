import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,

    notification: { message: '', color: null },
    notificationVisible: false
  },

  mutations: {
    setDrawer (state, drawer) {
      state.drawer = drawer
    },

    setNotification (state, notification) {
      state.notification = notification
    },

    setNotificationVisible (state, notificationVisible) {
      state.notificationVisible = notificationVisible
    }
  },

  getters: {
    notificationVisible: state => state.notification !== null
  },

  actions: {
    setDrawer ({commit}, drawer) {
      commit('setDrawer', drawer)
    },

    toggleDrawer ({commit, state}) {
      commit('setDrawer', !state.drawer)
    },

    setNotificationVisible ({commit}, notificationVisible) {
      commit('setNotificationVisible', notificationVisible)
    },

    showNotification ({commit}, notification) {
      commit('setNotification', notification)
      commit('setNotificationVisible', true)
    },

    showMessage ({dispatch}, message) {
      dispatch('showNotification', {message, color: null})
    },

    showSuccess ({dispatch}, message) {
      dispatch('showNotification', {message, color: 'success'})
    },

    showWarning ({dispatch}, message) {
      dispatch('showNotification', {message, color: 'warning'})
    },

    showError ({dispatch}, message) {
      dispatch('showNotification', {message, color: 'error'})
    }
  }
})
