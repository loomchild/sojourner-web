import firebase from 'firebase'

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

    initUser ({commit}, user) {
      firebase.auth().onAuthStateChanged(user => {
        commit('setUser', user)
      })
    },

    logIn ({commit}, {email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    },

    logOut ({commit}) {
      return firebase.auth().signOut()
    }
  }
}
