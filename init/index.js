import initFirebase from './initFirebase'
import initServiceWorker from './initServiceWorker'
import initStore from './initStore'

export default async function () {
  try {
    await initFirebase()
    await initServiceWorker()
    await initStore()
  } catch (error) {
    console.error(error)
  }
}
