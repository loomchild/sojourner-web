<template>
  <v-list-tile class="track" :to="`/track/${track.track.name}`">
    <v-list-tile-content v-ripple>
      <v-list-tile-title>{{ track.track.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ track.events.length }} events |
        {{ track.days.map(day => `${day.day.name} - ${day.rooms.map(room => room.name).join(', ')}`).join(' | ') }}
        <v-icon color="secondary" :title="state.name">{{ state.icon }}</v-icon>
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'conference-track',

  props: ['track'],

  computed: {
    state () {
      let room = {}
      if (this.track.rooms.length === 1) {
        room = this.track.rooms[0].room
      } else {
        const todaySunday = new Date().getDay() === 0
        const todayRooms = this.track.rooms.filter(room => room.days.filter(day => todaySunday ? day === 'Sunday' : day === 'Saturday').length > 0)
        if (todayRooms.length === 1) {
          room = todayRooms[0].room
        }
      }
      return this.roomState(room.name)
    },

    ...mapGetters([
      'roomState'
    ])
  }
}
</script>

<style>
.track .v-list__tile__title {
  white-space: normal;
  height: auto;
  max-height: 48px;
}

.track .v-list__tile__sub-title {
  color: var(--v-secondary-base) !important;
}

.track .v-list__tile__sub-title i {
  font-size: 17px;
  vertical-align: text-bottom;
  margin-left: 1px;
}
</style>
