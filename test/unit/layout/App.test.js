import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import {createLocalVue, shallow} from 'vue-test-utils'

import App from '@/layout/App'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)

describe('App', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()
    const store = new Vuex.Store({})
    wrapper = shallow(App, {
      localVue,
      store,
      stubs: ['router-view']
    })
  })

  it('should have app', () => {
    expect(wrapper.find('#app').exists()).to.be.true
  })
})
