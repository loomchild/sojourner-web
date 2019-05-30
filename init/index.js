import initFirebase from './initFirebase'
import initFixes from './initFixes'
import initServiceWorker from './initServiceWorker'
import initStyle from './initStyle'
import initDirectives from './initDirectives'

export default function () {
  // asynchronous init, not waiting for operations, no order
  initServiceWorker()
  initFixes()
  initFirebase()
  initStyle()
  initDirectives()
}
