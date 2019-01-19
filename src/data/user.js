import hoodie from '../hoodie'

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

    async logIn ({commit}, {email, password}) {
      if (!email) {
        throw new Error('Missing email')
      }
      if (!password) {
        throw new Error('Missing password')
      }
      const account = await hoodie.account.signIn({username: email, password})

      const user = {
        account,
        email: account.username
      }
      commit('setUser', user)
    },

    logOut ({commit}) {
      return hoodie.account.signOut()
        .then(() => commit('setUser', null))
    }
  }
}
