import sinon from 'sinon'

import store from '@/store'
import json from '@/test/unit/resources/fosdem-2019.json'

describe('data/getSchedule', () => {
  let stubbedFetch

  beforeEach(() => {
    stubbedFetch = sinon.stub(window, 'fetch')
    fetch.resolves(new Response(JSON.stringify(json), { status: 200 }))
  })

  afterEach(() => {
    stubbedFetch.restore()
  })

  it('should retrieve all events', () => {
    return store.dispatch('initSchedule')
      .then(() => {
        expect(store.state.schedule.events['8967']).to.not.be.undefined
      })
  })
})
