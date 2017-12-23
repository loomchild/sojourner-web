import Vue from 'vue'
import Router from 'vue-router'

import AllEvents from './components/AllEvents'
import FavouriteEvents from './components/FavouriteEvents'
import Settings from './components/Settings'
import EventDetails from './components/EventDetails'

window.history.scrollRestoration = 'manual'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all-events',
      component: AllEvents
    },
    {
      path: '/favourites',
      name: 'favourite-events',
      component: FavouriteEvents
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/event/:id',
      name: 'event',
      component: EventDetails
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return Vue.nextTick().then(() => savedPosition)
    } else {
      return { x: 0, y: 0 }
    }
  }
})
