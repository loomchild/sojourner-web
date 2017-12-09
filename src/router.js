import Vue from 'vue'
import Router from 'vue-router'

import AllEvents from './components/AllEvents'
import Settings from './components/Settings'

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
    }
  ]
})
