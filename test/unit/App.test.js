import Vue from 'vue'
import Vuetify from 'vuetify'
import {createLocalVue, shallow} from 'vue-test-utils'

import App from '../../src/App'

Vue.config.productionTip = false
Vue.use(Vuetify)

describe('App', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.prototype.$eventBus = new Vue()
    wrapper = shallow(App, {
      localVue,
      stubs: ['router-view']
    })
  })

  it('should have app', () => {
    expect(wrapper.find('#app').exists()).to.be.true
  })
})
