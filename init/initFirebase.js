import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default async function () {
  try {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    })
    await firebase.firestore().enablePersistence({ synchronizeTabs: true })
  } catch (error) {
    console.error(error)
  }
}
