import Vue from 'vue'
import Vuex from 'vuex'

import drawer from './drawer'
import notification from './notification'
import favourite from './favourite'
import map from './map'
import schedule from './schedule'
import state from './state'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drawer,
    notification,
    map,
    favourite,
    schedule,
    state,
    user
  }
})
