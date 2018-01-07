import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'typeface-roboto'
import 'vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'
import store from './data/store'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app></app>',
  components: {
    app: App
  }
})
