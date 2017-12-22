import Vue from 'vue'
import Router from 'vue-router'

import AllEvents from './components/AllEvents'
import Settings from './components/Settings'
import EventDetails from './components/EventDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all-events',
      component: AllEvents
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
  ]
})
