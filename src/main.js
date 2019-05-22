import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'typeface-roboto'

import router from './router'
import store from './store'
import init from './init'
import App from './App'

Vue.use(Vuetify)

async function main () {
  await init()

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
      setTimeout(() => document.dispatchEvent(new Event('render-event')), 100)
    }
  })
}
main()
