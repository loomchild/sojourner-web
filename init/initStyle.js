import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'typeface-rubik'
import 'typeface-roboto-condensed'
import '@/main.styl'

import '@/preload.css'

const conference = require(`@/conferences/${process.env.CONFERENCE_ID}`)

Vue.use(Vuetify, {
  theme: {
    ...conference.colors
  },
  options: {
    customProperties: true
  }
})

export default function () {}
