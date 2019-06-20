import {Workbox} from 'workbox-window'

import config from '@/config'
import store from '@/store'

export default function () {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js')

    wb.addEventListener('activated', event => {
      if (event.isUpdate) {
        store.dispatch('notifyNewVersion')
      } else {
        wb.messageSW({
          type: 'CACHE_URLS',
          payload: {
            urlsToCache: [config.scheduleUrl]
          }
        })
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
