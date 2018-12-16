import Hoodie from '@hoodie/client'
import PouchDB from 'pouchdb'

import config from '../config'

const hoodie = new Hoodie({
  PouchDB,
  url: config.apiUrl
})

window.hoodie = hoodie

export default hoodie
