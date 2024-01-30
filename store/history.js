import { router } from '@/pages'

function getHistoryStateKey () {
  return window.history.state && window.history.state.key
}

export default {
  state: {
    initialHistoryStateKey: null
  },

  mutations: {
    initHistoryStateKey (state, historyStateKey) {
      state.initialHistoryStateKey = historyStateKey
    }
  },

  actions: {
    initHistory ({ commit }) {
      const historyStateKey = getHistoryStateKey()
      commit('initHistoryStateKey', historyStateKey)
    },

    goBack ({ state }) {
      if (state.initialHistoryStateKey && state.initialHistoryStateKey === getHistoryStateKey()) {
        router.push({ name: 'dashboard' })
        return
      }

      router.go(-1)
    }
  }
}
