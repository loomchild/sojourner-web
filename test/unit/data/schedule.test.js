import sinon from 'sinon'

import store from '../../../src/data/store'
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
    store.dispatch('parseSchedule')
      .then(() => {
        expect(schedule.events[1]).to.not.be.undefined
      })
  })
})
