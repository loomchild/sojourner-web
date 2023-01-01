import moment from 'moment'

const TEST = false

const CRON_UPDATE_INTERVAL = !TEST ? 60 * 1000 : 1000
const TIME_FORMAT = 'HH:mm'
const DATE_FORMAT = 'YYYY-MM-DD'
const SOON_MINUTES = 15

function getDate (date) {
  return moment(date).format(DATE_FORMAT)
}

function getTime (date) {
  return moment(date).format(TIME_FORMAT)
}

export default {
  state: {
    currentDate: null,
    currentTime: null
  },

  getters: {
    currentDate: state => state.currentDate,

    currentTime: state => state.currentTime,

    soonTime: state => moment(state.currentTime, TIME_FORMAT).add(SOON_MINUTES, 'minutes').format(TIME_FORMAT)
  },

  mutations: {
    setCurrentDate (state, currentDate) {
      state.currentDate = currentDate
    },

    setCurrentTime (state, currentTime) {
      state.currentTime = currentTime
    }
  },

  actions: {
    initCron ({ dispatch }) {
      dispatch('updateCron')
      setInterval(() => dispatch('updateCron'), CRON_UPDATE_INTERVAL)
    },

    updateCron ({ commit, dispatch }) {
      const date = !TEST ? new Date() : moment().year(2023).month('February').date(4).hour(10).minute(moment().second())
      const currentDate = getDate(date)
      const currentTime = getTime(date)
      commit('setCurrentDate', currentDate)
      commit('setCurrentTime', currentTime)

      dispatch('notifyTrackEvent')
      if (TEST) {
        console.log(currentTime)
      }
    }
  }
}
