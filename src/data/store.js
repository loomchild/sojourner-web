import Vue from 'vue'
import Vuex from 'vuex'

import drawer from './drawer'
import notification from './notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drawer,
    notification
  }
})
