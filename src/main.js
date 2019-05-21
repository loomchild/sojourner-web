import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'typeface-roboto'

import App from './App'
import router from './router'
import store from './data/store'
import './firebase'
import './init'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app></app>',
  components: {
    app: App
  },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
