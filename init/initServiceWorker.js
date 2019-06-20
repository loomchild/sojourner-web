import {Workbox} from 'workbox-window'

import store from '@/store'

export default function () {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js')

    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        store.dispatch('notifyNewVersion')
      }
    })

    wb.addEventListener('message', event => {
      if (event.data.type === 'CACHE_UPDATED') {
        setTimeout(() => {
          store.dispatch('notifyRefreshSchedule')
        }, 10000)
      }
    })

    wb.register()
  }
}
