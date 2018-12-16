import Vue from 'vue'
import VueHoodie from 'vue-hoodie'
import Hoodie from '@hoodie/client'
import PouchDB from 'pouchdb'

import config from '../config'

Vue.use(VueHoodie)

const hoodie = new Hoodie({
  PouchDB,
  url: config.apiUrl
})

window.hoodie = hoodie

export default hoodie
