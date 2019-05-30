import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'typeface-roboto'
import 'typeface-rubik'
import '@/main.styl'

import '@/preload.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#54BECA',
    secondary: '#A12F88'
  },
  options: {
    customProperties: true
  }
})

export default function () {}
