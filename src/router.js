import Vue from 'vue'
import Router from 'vue-router'

import AllEvents from './components/AllEvents'
import FavouriteEvents from './components/FavouriteEvents'
import ConferenceTracks from './components/ConferenceTracks'
import ConferenceTrackEvents from './components/ConferenceTrackEvents'
import Rooms from './components/Rooms'
import RoomEvents from './components/RoomEvents'
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
      path: '/event/:id',
      name: 'event',
      component: EventDetails
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: ConferenceTracks
    },
    {
      path: '/track/:name',
      name: 'track',
      component: ConferenceTrackEvents
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/room/:name',
      name: 'room',
      component: RoomEvents
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
