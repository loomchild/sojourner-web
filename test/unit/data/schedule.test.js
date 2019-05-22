import sinon from 'sinon'

import store from '../../../src/store'
import xml from '../resources/schedule.xml'

describe('data/getSchedule', () => {
  let stubbedFetch

  beforeEach(() => {
    stubbedFetch = sinon.stub(window, 'fetch')
    fetch.resolves(new Response(xml, {status: 200}))
  })

  afterEach(() => {
    stubbedFetch.restore()
  })

  it('should retrieve all events', () => {
    return store.dispatch('initSchedule')
      .then(() => {
        expect(store.state.schedule.events['6230']).to.not.be.undefined
      })
  })
})
