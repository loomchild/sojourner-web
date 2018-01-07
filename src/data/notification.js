const DEFAULT_NOTIFICATION_TIMEOUT = 5000

export default {
  state: {
    notification: { message: '', color: null },
    notificationVisible: false
  },

  mutations: {
    setNotification (state, notification) {
      state.notification = notification
    },

    setNotificationVisible (state, notificationVisible) {
      state.notificationVisible = notificationVisible
    }
  },

  getters: {
    notification: state => state.notification,

    notificationVisible: state => state.notificationVisible
  },

  actions: {
    setNotificationVisible ({commit}, notificationVisible) {
      commit('setNotificationVisible', notificationVisible)
    },

    showNotification ({commit}, notification) {
      if (notification.timeout === undefined) {
        notification.timeout = DEFAULT_NOTIFICATION_TIMEOUT
      }
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
}
