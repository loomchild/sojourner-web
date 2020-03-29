import Vue from 'vue'

import store from './store'
import vuetify from './vuetify'
import init from './init'
import { router } from './pages'
import App from '@/layout/App'

init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: {
    app: App
  },
  template: '<app></app>'
})
