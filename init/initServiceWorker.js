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

    const registration = await wb.register()

    registration.addEventListener('updatefound', () => {
      const installingWorker = registration.installing
      installingWorker.addEventListener('statechange', () => {
        if (installingWorker.state === 'activated') {
          store.dispatch('notifyNewVersion')
        }
      })
    })

    setInterval(async () => {
      console.log('Checking for updates...')
      registration.update()
    }, 15 * 60 * 1000)
  }
}
