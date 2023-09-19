import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore'

function getUserRefHelper (user) {
  return doc(getFirestore(), 'users', user.uid)
}

export default {
  state: {
    user: null,

    userUnsubscribe: null,

    loginDialog: false,

    persistent: false
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
    }
  },

  actions: {
    showLoginDialog ({ commit }) {
      commit('setLoginDialog', true)
    },

    hideLoginDialog ({ commit }) {
      commit('setLoginDialog', false)
    },

    initUser ({ commit, dispatch, state, rootGetters }) {
      onAuthStateChanged(getAuth(), async user => {
        if (state.userUnsubscribe) {
          await state.userUnsubscribe()
          commit('setUserUnsubscribe', null)
        }

        commit('setUser', user)
        if (user) {
          console.log(`Initializing user ${user.uid}`)

          await dispatch('setExistingFavourites')

          const userUnsubscribe = onSnapshot(getUserRefHelper(user), user => {
            if (!user || !user.data() || !user.data()[rootGetters.conferenceId]) {
              return
            }
            const conference = user.data()[rootGetters.conferenceId]
            if (!conference.favourites) {
              return
            }
            const favourites = {}
            conference.favourites.forEach(favourite => {
              favourites[favourite] = true
            })
            commit('setFavourites', favourites)
          })
          commit('setUserUnsubscribe', userUnsubscribe)
        } else {
          commit('setFavourites', [])
        }
      })
    },

    async register ({ commit, rootGetters, dispatch }, { email, password }) {
      const response = await createUserWithEmailAndPassword(getAuth(), email, password)
      await getUserRefHelper(response.user).set({})
    },

    logIn ({ commit, rootGetters, dispatch }, { email, password }) {
      return signInWithEmailAndPassword(getAuth(), email, password)
    },

    logOut ({ commit }) {
      return signOut(getAuth())
    },

    async getUserRef ({ state }) {
      if (state.user) {
        return getUserRefHelper(state.user)
      } else {
        const response = await signInAnonymously(getAuth())
        const user = getUserRefHelper(response.user)
        await setDoc(user, {}, { merge: true })
        return user
      }
    },

    async initPersistent ({ commit, dispatch }) {
      if (navigator.storage && navigator.storage.persisted) {
        const persistent = await navigator.storage.persisted()
        if (persistent) {
          commit('setPersistent', true)
        }
      } else {
        commit('setPersistent', false)
      }
    },

    async persist ({ commit }) {
      if (navigator.storage && navigator.storage.persist) {
        const persistent = await navigator.storage.persist()

        if (persistent) {
          commit('setPersistent', true)
        } else {
          throw new Error('Could not enable persistence')
        }
      } else {
        return Promise.reject(new Error('Persistence not supported by the browser'))
      }
    }
  }
}
