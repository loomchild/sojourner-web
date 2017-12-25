import sinon from 'sinon'

import {getSchedule, getAllEvents} from '../../../src/data/schedule'
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

  it('should retrieve schedule', () => {
    return getSchedule()
      .then(schedule => {
        expect(schedule[0].conference).to.not.be.undefined
      })
  })

  it('should retrieve all events', () => {
    return getAllEvents()
      .then(events => {
        expect(events[1]).to.not.be.undefined
      })
  })
})
