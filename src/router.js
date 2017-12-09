import Vue from 'vue'
import Router from 'vue-router'
import AllEvents from './components/AllEvents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllEvents',
      component: AllEvents
    }
  ]
})
