const DEFAULT_NOTIFICATION_TIMEOUT = 10000

export default {
  state: {
    notifications: []
  },

  mutations: {
    pushNotification (state, notification) {
      state.notifications.push(notification)
    },

    popNotification (state) {
      state.notifications.shift()
    }
  },

  getters: {
    notifications: state => state.notifications
  },

  actions: {
    hideNotification ({commit}) {
      commit('popNotification')
    },

    showNotification ({commit}, notification) {
      if (notification.timeout === undefined) {
        notification.timeout = DEFAULT_NOTIFICATION_TIMEOUT
      }
      commit('pushNotification', notification)
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
}
