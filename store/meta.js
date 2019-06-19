export default {
  state: {
    title: null,

    drawer: null,

    tab: 0
  },

  getters: {
    timestamp: () => TIMESTAMP,

    commithash: () => COMMITHASH,

    version: () => VERSION,

    title: state => state.title,

    drawer: state => state.drawer,

    tab: state => state.tab
  },

  mutations: {
    setTitle (state, title) {
      state.title = title
    },

    setDrawer (state, drawer) {
      state.drawer = drawer
    },

    setTab (state, tab) {
      state.tab = tab
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
    },

    setTab ({commit}, tab) {
      commit('setTab', tab)
    },

    initA2HSTip ({commit, state, dispatch}) {
      if (window.onbeforeinstallprompt !== undefined) {
        const handler = (e) => {
          e.preventDefault()
          let deferredPrompt = e
          setTimeout(() => {
            dispatch('showNotification', {
              message: 'Add this application to your home screen.',
              color: 'info',
              timeout: 0,
              button: {
                title: 'ADD',
                handler: () => {
                  window.removeEventListener('beforeinstallprompt', handler)
                  deferredPrompt.prompt()
                  deferredPrompt.userChoice.then(choice => {
                    console.log(`User ${choice.outcome} the A2HS prompt`)
                  })
                  deferredPrompt = null
                }
              }
            })
          }, 30 * 1000)
        }
        window.addEventListener('beforeinstallprompt', handler)
      } else if (navigator.userAgent.match(/Mobile|Tablet/)) {
        setTimeout(() => {
          dispatch('showNotification', {
            message: 'If you enjoy this application, please consider adding it to your home screen.',
            color: 'info'
          })
        }, 60 * 1000)
      }
    }
  }
}
