import { Workbox } from 'workbox-window'

import store from '@/store'

export default async function () {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js', { updateViaCache: 'none' })

    wb.addEventListener('installed', event => {
      console.log('install')
    })

    wb.addEventListener('activated', event => {
      console.log('activate')
      if (event.isUpdate) {
        console.log('update')
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
        console.log('Checking for updates...')
        registration.update()
      }
    }, 5 * 60 * 1000)

    const registration = await wb.register()
    console.log(registration)
    registration.addEventListener('updatefound', function () {
      var installingWorker = registration.installing
      console.log('A new service worker is being installed:', installingWorker)
    })
  }
}
