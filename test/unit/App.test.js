import Vue from 'vue'
import App from '../../src/App.vue'

describe('App', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
  })

  it('should have logo', () => {
    expect(vm.$el.querySelector('#logo')).is.not.undefined
  })
})
