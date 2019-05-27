import initFirebase from './initFirebase'
import initServiceWorker from './initServiceWorker'
import initStyle from './initStyle'

export default function () {
  // asynchronous init, not waiting for operations, no order
  initServiceWorker()
  initFirebase()
  initStyle()
}
