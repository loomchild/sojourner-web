import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import config from './config'

Vue.use(Vuetify)

export default new Vuetify({
  treeShake: true,
  theme: {
    themes: {
      light: {
        ...config.colors
      },
      dark: {
        ...config.colors
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
