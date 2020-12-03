import Vue from 'vue'
import Vuex from 'vuex'

import meta from './meta'
import notification from './notification'
import favourite from './favourite'
import map from './map'
import schedule from './schedule'
import state from './state'
import user from './user'
import player from './player'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meta,
    notification,
    map,
    favourite,
    schedule,
    state,
    user,
    player
  }
})
