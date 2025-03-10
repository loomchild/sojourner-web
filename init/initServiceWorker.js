import { Workbox } from 'workbox-window'

import store from '@/store'

export default async function () {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js', { updateViaCache: 'none' })

    wb.addEventListener('installed', event => {
      console.log('installed')
    })

    wb.addEventListener('activated', event => {
      console.log('activated')

      caches.delete(store.getters.conferenceScheduleUrl)
      caches.delete('https://fosdem.sojourner.rocks/assets/manifest.json')

      if (event.isUpdate) {
        console.log('update')
        store.dispatch('notifyNewVersion')
      } else {
        wb.messageSW({
          type: 'CACHE_URLS',
          payload: {
            urlsToCache: [store.getters.conferenceScheduleUrl]
          }
        })
      }
    })

    wb.addEventListener('controlling', event => {
      console.log('controlling')
    })

    wb.addEventListener('message', event => {
      console.log(`message ${event.data.type}`)
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
