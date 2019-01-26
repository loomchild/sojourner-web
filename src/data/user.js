import firebase from 'firebase/app'

function getUserDataHelper (user) {
  return firebase.firestore().collection('users').doc(user.uid)
}

export default {
  state: {
    user: null,

    loginDialog: false
  },

  getters: {
    user: state => state.user,

    loginDialog: state => state.loginDialog
  },

  mutations: {
    setUser (state, user) {
      state.user = user
    },

    setLoginDialog (state, loginDialog) {
      state.loginDialog = loginDialog
    }
  },

  actions: {
    showLoginDialog ({commit}) {
      commit('setLoginDialog', true)
    },

    hideLoginDialog ({commit}) {
      commit('setLoginDialog', false)
    },

    initUser ({commit, dispatch}, user) {
      return firebase.auth().onAuthStateChanged(user => {
        commit('setUser', user)
        if (user) {
          return dispatch('initFavourites')
        } else {
          commit('setFavourites', [])
        }
      })
    },

    register ({commit}, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
    },

    logIn ({commit}, {email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => getUserDataHelper(response.user).set({}, {merge: true}))
    },

    logOut ({commit}) {
      return firebase.auth().signOut()
    },

    getUserData ({state}) {
      if (state.user) {
        return getUserDataHelper(state.user)
      }
      if (!state.user) {
        return firebase.auth().signInAnonymously()
          .then(response => {
            const userData = getUserDataHelper(response.user)
            userData.set({}, {merge: true})
            return userData
          })
      }
    }
  }
}
