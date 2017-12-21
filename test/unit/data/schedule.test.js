import {getSchedule, getAllEvents} from '../../../src/data/schedule'

describe('data/getSchedule', () => {
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
