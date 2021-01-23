import moment from 'moment'

const CRON_UPDATE_INTERVAL = 1000
const TIME_FORMAT = 'HH:mm'
const DATE_FORMAT = 'YYYY-MM-DD'
const SOON_MINUTES = 10

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

    updateCron ({ commit }) {
      const date = new Date()
      // const date = moment().year(2021).month('February').date(6).hour(10).minute(moment().second())
      const currentDate = getDate(date)
      const currentTime = getTime(date)
      commit('setCurrentDate', currentDate)
      commit('setCurrentTime', currentTime)
    }
  }
}
