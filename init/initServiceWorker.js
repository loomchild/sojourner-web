import { Workbox } from 'workbox-window'

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
            urlsToCache: [process.env.SCHEDULE_URL]
          }
        })
      }
    })

    wb.addEventListener('message', event => {
      if (event.data.type === 'CACHE_UPDATED') {
        store.dispatch('notifyRefreshSchedule')
      }
    })

    setInterval(async () => {
      const registrations = await navigator.serviceWorker.getRegistrations()
      for (const registration of registrations) {
        console.log('Checking for updates')
        registration.update()
      }
    }, 5 * 60 * 1000)

    wb.register()
  }
}
