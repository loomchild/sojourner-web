import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import {createLocalVue, shallow} from 'vue-test-utils'

import App from '@/layout/App'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueRouter)

describe('App', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()
    const store = new Vuex.Store({})
    const router = new VueRouter()
    wrapper = shallow(App, {
      localVue,
      store,
      router,
      stubs: ['router-view']
    })
  })

  it('should have app', () => {
    expect(wrapper.find('#app').exists()).to.be.true
  })
})
