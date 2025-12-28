import config from '@/config'

function isStandalone () {
  return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches
}

function isLocalStorageAvailable () {
  try {
    window.localStorage.setItem('__storage_test__', 0)
    window.localStorage.removeItem('__storage_test__')
    return true
  } catch (e) {
    return false
  }
}

function getDate () {
  return new Date().toISOString().substring(0, 10)
}

function canShowA2HSTip () {
  if (!isLocalStorageAvailable()) {
    return
  }

  const value = window.localStorage.getItem('a2hsTip')

  return value !== getDate()
}

function shownA2HSTip () {
  window.localStorage.setItem('a2hsTip', getDate())
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

    hasLive: (state, getters, rootState, rootGetters) => config.features.live && rootGetters.isLatestConferenceEdition,

    hasSpeakers: (state, getters, rootState, rootGetters) => rootGetters.allPersons.length > 0
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
    initMeta ({ commit, rootGetters }) {
      if (getDate() === rootGetters.conferenceEdition.dates[1]) {
        commit('setTab', 1)
      }
    },

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
      if (!canShowA2HSTip()) {
        return
      }

      if (window.onbeforeinstallprompt !== undefined) {
        const handler = (e) => {
          e.preventDefault()
          let deferredPrompt = e

          setTimeout(() => {
            shownA2HSTip()

            dispatch('showNotification', {
              message: 'If you enjoy using this application, please consider installing it.',
              timeout: -1,
              button: {
                title: 'INSTALL',
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
          }, 60 * 1000)
        }
        window.addEventListener('beforeinstallprompt', handler)
      } else if (navigator.userAgent.match(/Mobile|Tablet/) && !isStandalone()) {
        setTimeout(() => {
          shownA2HSTip()

          dispatch('showNotification', {
            message: 'If you enjoy using this application, please consider installing it.',
            timeout: -1
          })
        }, 90 * 1000)
      }
    },

    notifyNewVersion ({ dispatch }) {
      dispatch('showNotification', {
        message: 'New version is available.',
        timeout: -1,
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
