import config from '../../config'
import RoomState from '../logic/RoomState'

export default {
  state: {
    roomStates: {},
    roomStateUpdaterInitialized: false
  },

  getters: {
    roomStates: state => state.roomStates,

    roomState: state => roomName => {
      const roomState = state.roomStates[roomName]
      if (roomState) {
        return roomState
      } else {
        return new RoomState({room: roomName})
      }
    }
  },

  mutations: {
    initializeRoomStateUpdater (state) {
      state.roomStateUpdaterInitialized = true
    },

    setRoomStates (state, roomStates) {
      state.roomStates = roomStates
    }
  },

  actions: {
    refreshRoomStates ({commit}) {
      return fetch(config.roomStateUrl, {cache: 'no-store'})
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`)
          }
          return response.json()
        })
        .then(response => {
          const roomStates = {}
          response.forEach(room => {
            roomStates[room.roomname] = Object.freeze(new RoomState({
              room: room.roomname,
              state: parseInt(room.state)
            }))
          })
          return roomStates
        })
        .then(roomStates => commit('setRoomStates', roomStates))
    },

    initRoomStateUpdater ({dispatch, state, commit}) {
      const scheduleRefreshRoomStates = (attempt = 0) => {
        return dispatch('refreshRoomStates')
          .then(() => setTimeout(scheduleRefreshRoomStates, config.roomStatePollInterval * 1000))
          .catch(() => {
            if (attempt > 3) {
              commit('setRoomStates', {})
            }
            setTimeout(() => scheduleRefreshRoomStates(attempt + 1), config.roomStatePollInterval * 1000)
          })
      }
      if (!state.roomStateUpdaterInitialized && config.roomStatePollInterval > 0) {
        scheduleRefreshRoomStates()
      }
    }
  }
}
