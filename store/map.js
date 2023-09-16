import Building from '@/logic/Building'

import config from '@/config'

export default {
  state: {
    buildings: {
      J: new Building({ name: 'J' }),
      H: new Building({ name: 'H' }),
      AW: new Building({ name: 'AW' }),
      U: new Building({ name: 'U' }),
      K: new Building({ name: 'K' })
    }
  },

  getters: {
    hasMap: () => config.features.map,

    buildings: state => state.buildings,

    roomBuilding: state => roomName => Object.values(state.buildings).filter(building => building.containsRoom(roomName))[0]
  }

}
