import {getSchedule} from '../../../src/data/schedule'

describe('data/getSchedule', () => {
  it('should retrieve schedule', () => {
    const schedule = getSchedule()

    expect(schedule.conference).to.not.be.undefined
  })
})
