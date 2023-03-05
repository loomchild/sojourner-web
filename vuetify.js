import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const conference = require(`@/conferences/${process.env.CONFERENCE_ID}`)

Vue.use(Vuetify)

export default new Vuetify({
  treeShake: true,
  theme: {
    themes: {
      light: {
        ...conference.colors
      },
      dark: {
        ...conference.colors
      }
    },
    options: {
      customProperties: true
    },
    icons: {
      iconfont: 'mdi'
    }
  }
})
