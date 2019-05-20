import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
const moment = require('moment')

export default {
  env: {
    'TIMESTAMP': JSON.stringify(moment().format('YYYY-MM-DD HH:mm:ss'))
  },

  build: {
    transpile: ['vuetify/lib'],

    plugins: [new VuetifyLoaderPlugin()],

    loaders: {
    },

    extend (config, ctx) {
    }
  }
}
