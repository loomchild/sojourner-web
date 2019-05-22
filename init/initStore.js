import store from '@/store'

export default async function () {
  await store.dispatch('initIndexedDB')
  await store.dispatch('migrateLegacyFavourites')
  await store.dispatch('initPersistent')
  await store.dispatch('initSchedule')
  await store.dispatch('initUser')
  await store.dispatch('initRoomStateUpdater')
}
