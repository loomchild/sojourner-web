import firebase from 'firebase/app'

function getUserRefHelper (user) {
  return firebase.firestore().collection('users').doc(user.uid)
}

export default {
  state: {
    user: null,

    userUnsubscribe: null,

    loginDialog: false,

    persistent: false,

    loseDataWarning: false
  },

  getters: {
    user: state => state.user,

    realUser: state => (state.user && !state.user.isAnonymous) ? state.user : null,

    loginDialog: state => state.loginDialog,

    persistent: state => state.persistent
  },

  mutations: {
    setUser (state, user) {
      state.user = user
    },

    setUserUnsubscribe (state, userUnsubscribe) {
      state.userUnsubscribe = userUnsubscribe
    },

    setLoginDialog (state, loginDialog) {
      state.loginDialog = loginDialog
    },

    setPersistent (state, persistent) {
      state.persistent = persistent
    },

    shownLoseDataWarning (state) {
      state.loseDataWarning = true
    }
  },

  actions: {
    showLoginDialog ({commit}) {
      commit('setLoginDialog', true)
    },

    hideLoginDialog ({commit}) {
      commit('setLoginDialog', false)
    },

    initUser ({commit, dispatch, state, rootGetters}, user) {
      firebase.auth().onAuthStateChanged(async user => {
        if (state.userUnsubscribe) {
          await state.userUnsubscribe()
          commit('setUserUnsubscribe', null)
        }

        commit('setUser', user)
        if (user) {
          console.log(`Initializing user ${user.uid}`)

          await dispatch('setExistingFavourites')

          const userUnsubscribe = getUserRefHelper(user).onSnapshot(user => {
            const favourites = {}
            if (user.data().favourites) {
              user.data().favourites.forEach(favourite => {
                favourites[favourite] = true
              })
              commit('setFavourites', favourites)
            }
          })
          commit('setUserUnsubscribe', userUnsubscribe)
        } else {
          commit('setFavourites', [])
        }
      })
    },

    register ({commit, rootGetters, dispatch}, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => getUserRefHelper(response.user).set({}))
    },

    logIn ({commit, rootGetters, dispatch}, {email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    },

    logOut ({commit}) {
      return firebase.auth().signOut()
    },

    getUserRef ({state}) {
      if (state.user) {
        return getUserRefHelper(state.user)
      } else {
        return firebase.auth().signInAnonymously()
          .then(response => {
            const userData = getUserRefHelper(response.user)
            userData.set({}, {merge: true})
            return userData
          })
      }
    },

    initPersistent ({commit, dispatch}) {
      if (navigator.storage && navigator.storage.persisted) {
        return navigator.storage.persisted()
          .then(persistent => {
            if (persistent) {
              commit('setPersistent', true)
            }
          })
      } else {
        commit('setPersistent', false)
      }
    },

    initIndexedDB ({dispatch}) {
      return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('sojourner-test')
        request.onerror = () => {
          dispatch('showError', 'Unable to initialize IndexedDB, are you browsing in private mode?')
          reject(new Error('Unable to open IndexedDB'))
        }
        request.onsuccess = () => {
          request.result.close()
          resolve()
        }
      })
    },

    persist ({commit}) {
      if (navigator.storage && navigator.storage.persist) {
        return navigator.storage.persist()
          .then(persistent => {
            if (persistent) {
              commit('setPersistent', true)
            } else {
              throw new Error('Could not enable persistence')
            }
          })
      } else {
        return Promise.reject(new Error('Persistence not supported by the browser'))
      }
    },

    assurePersistent ({dispatch, commit, state, getters}) {
      if (!getters.realUser && !state.persistent) {
        return dispatch('persist')
          .catch(e => {
            if (!state.loseDataWarning) {
              console.error(e)
              return dispatch('showNotification', {
                message: 'To assure that your data is preserved, please either allow persistent data storage (bookmarking or adding to home screen might help) or log-in.',
                level: 'warning',
                timeout: 0
              }).then(() => commit('shownLoseDataWarning'))
            }
          })
      }
    }
  }
}
