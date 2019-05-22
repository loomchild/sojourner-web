import Vue from 'vue'
import Router from 'vue-router'

import About from './About'
import SearchEvents from './SearchEvents'
import BuildingMap from './BuildingMap'
import CampusMap from './CampusMap'
import ConferenceTracks from './ConferenceTracks'
import ConferenceTrackEvents from './ConferenceTrackEvents'
import EventDetails from './EventDetails'
import FavouriteEvents from './FavouriteEvents'
import Rooms from './Rooms'
import RoomEvents from './RoomEvents'
import Settings from './Settings'

window.history.scrollRestoration = 'manual'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/tracks'
    },
    {
      path: '/search',
      name: 'search-events',
      component: SearchEvents
    },
    {
      path: '/favourites',
      name: 'favourite-events',
      component: FavouriteEvents
    },
    {
      path: '/event/:eventId',
      name: 'event',
      component: EventDetails,
      props: true
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: ConferenceTracks
    },
    {
      path: '/track/:trackName',
      name: 'track',
      component: ConferenceTrackEvents,
      props: true
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/room/:roomName',
      name: 'room',
      component: RoomEvents,
      props: true
    },
    {
      path: '/map',
      name: 'campus-map',
      component: CampusMap
    },
    {
      path: '/map/:buildingName',
      name: 'building-map',
      component: BuildingMap,
      props: true
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/about',
      name: 'about',
      component: About
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

export {
  router
}
