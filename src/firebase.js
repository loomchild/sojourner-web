import config from '../config'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(config.firebase)

firebase.firestore().enablePersistence()
  .catch(console.error)
