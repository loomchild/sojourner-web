import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'typeface-rubik'
import '@/main.styl'

import '@/preload.css'

Vue.use(Vuetify, {
  theme: {
    primary: {
      base: '#54BECA',
      lighten3: '#DCEBED'
    },
    secondary: {
      base: '#A12F88',
      lighten5: '#FFF0E8'
    }
  },
  options: {
    customProperties: true
  }
})

export default function () {}
