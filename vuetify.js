import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const conference = require(`@/conferences/${process.env.CONFERENCE_ID}`)

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    ...conference.colors
  },
  options: {
    customProperties: true
  }
})
