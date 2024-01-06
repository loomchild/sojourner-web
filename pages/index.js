import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import config from '@/config'

import Edition from './Edition'
import Dashboard from './Dashboard'
import About from './About'
import SearchEvents from './SearchEvents'
import BuildingMap from './BuildingMap'
import CampusMap from './CampusMap'
import ConferenceTrackEvents from './ConferenceTrackEvents'
import EventDetails from './EventDetails'
import FavouriteEvents from './FavouriteEvents'
import TypeTracksOrEvents from './TypeTracksOrEvents'
import AllEvents from './AllEvents'
import LiveEvents from './LiveEvents'

window.history.scrollRestoration = 'manual'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/${config.conference.editions[0].id}`
    },
    {
      path: '/:editionId(\\d+)',
      component: Edition,

      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
          meta: {
            layout: 'cover'
          }
        },

        {
          path: 'live',
          name: 'live-events',
          component: LiveEvents
        },

        {
          path: 'search',
          name: 'search-events',
          component: SearchEvents
        },

        {
          path: 'favourites',
          name: 'favourite-events',
          component: FavouriteEvents
        },

        {
          path: 'all',
          name: 'all-events',
          component: AllEvents
        },

        {
          path: 'event/:eventId?',
          name: 'event',
          component: EventDetails,
          props: true
        },

        {
          path: 'type/:typeName?',
          name: 'type',
          component: TypeTracksOrEvents,
          props: true
        },

        {
          path: 'track/:trackName?',
          name: 'track',
          component: ConferenceTrackEvents,
          props: true
        },

        {
          path: 'map',
          name: 'campus-map',
          component: CampusMap
        },

        {
          path: 'building/:buildingName?',
          name: 'building-map',
          component: BuildingMap,
          props: true
        }
      ]
    },

    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        layout: 'cover'
      }
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
