import config from '@/config'

function isStandalone () {
  return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches
}

export default {
  state: {
    title: null,

    pageTitle: null,

    drawer: null,

    tab: 0
  },

  getters: {
    timestamp: () => process.env.TIMESTAMP,

    commithash: () => process.env.COMMITHASH,

    version: () => process.env.VERSION,

    title: state => state.title,

    pageTitle: state => state.pageTitle || state.title,

    drawer: state => state.drawer,

    tab: state => state.tab,

    hasAll: state => config.features.all,

    hasRooms: () => config.features.rooms,

    hasLive: () => config.features.live,

    previousEditions: () => []
  },

  mutations: {
    setTitle (state, title) {
      state.title = title
    },

    setPageTitle (state, pageTitle) {
      state.pageTitle = pageTitle
    },

    setDrawer (state, drawer) {
      state.drawer = drawer
    },

    setTab (state, tab) {
      state.tab = tab
    }
  },

  actions: {
    setTitle ({ commit }, title) {
      commit('setTitle', title)
    },

    setPageTitle ({ commit }, pageTitle) {
      commit('setPageTitle', pageTitle)
    },

    setDrawer ({ commit }, drawer) {
      commit('setDrawer', drawer)
    },

    toggleDrawer ({ commit, state }) {
      commit('setDrawer', !state.drawer)
    },

    setTab ({ commit }, tab) {
      commit('setTab', tab)
    },

    initA2HSTip ({ commit, state, dispatch }) {
      if (window.onbeforeinstallprompt !== undefined) {
        const handler = (e) => {
          e.preventDefault()
          let deferredPrompt = e
          if (window.localStorage) {
            const day = '' + new Date().getDate()
            if (window.localStorage.getItem('a2hsTip') && window.localStorage.getItem('a2hsTip') === day) {
              return
            } else {
              window.localStorage.setItem('a2hsTip', day)
            }
          }
          setTimeout(() => {
            dispatch('showNotification', {
              message: 'Add this application to your home screen.',
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
          }, 120 * 1000)
        }
        window.addEventListener('beforeinstallprompt', handler)
      } else if (navigator.userAgent.match(/Mobile|Tablet/) && !isStandalone()) {
        if (window.localStorage) {
          const day = '' + new Date().getDate()
          if (window.localStorage.getItem('a2hsTip') && window.localStorage.getItem('a2hsTip') === day) {
            return
          } else {
            window.localStorage.setItem('a2hsTip', day)
          }
        }
        setTimeout(() => {
          dispatch('showMessage', 'If you enjoy this application, please consider adding it to your home screen.')
        }, 180 * 1000)
      }
    },

    notifyNewVersion ({ dispatch }) {
      dispatch('showNotification', {
        message: 'New version is available.',
        timeout: 0,
        button: {
          title: 'REFRESH',
          handler: () => {
            window.location.reload()
          }
        }
      })
    }

  }
}
