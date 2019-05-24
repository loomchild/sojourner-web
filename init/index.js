import initFirebase from './initFirebase'
import initServiceWorker from './initServiceWorker'
import initStore from './initStore'

export default async function () {
  try {
    await initFirebase()
    await initStore()
    await initServiceWorker()
  } catch (error) {
    console.error(error)
  }
}
