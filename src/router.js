import Vue from 'vue'
import Router from 'vue-router'

import About from './components/About'
import SearchEvents from './components/SearchEvents'
import BuildingMap from './components/BuildingMap'
import CampusMap from './components/CampusMap'
import ConferenceTracks from './components/ConferenceTracks'
import ConferenceTrackEvents from './components/ConferenceTrackEvents'
import EventDetails from './components/EventDetails'
import FavouriteEvents from './components/FavouriteEvents'
import Rooms from './components/Rooms'
import RoomEvents from './components/RoomEvents'
import Settings from './components/Settings'

window.history.scrollRestoration = 'manual'

Vue.use(Router)

export default new Router({
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
