import sinon from 'sinon'

import store from '@/store'
import json from '@/test/resources/fosdem-2019.json'

describe('data/getSchedule', function () {
  this.timeout(10000)

  let stubbedFetch

  beforeEach(() => {
    stubbedFetch = sinon.stub(window, 'fetch')
    fetch.resolves(new Response(JSON.stringify(json), { status: 200 }))
  })

  afterEach(() => {
    stubbedFetch.restore()
  })

  it('should retrieve all events', async () => {
    await store.dispatch('initSchedule')

    expect(store.state.schedule.events['8967']).to.not.be.undefined
  })
})
