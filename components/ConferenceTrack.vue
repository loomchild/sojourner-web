<template>
  <v-list-tile class="track" :to="`/track/${track.track.name}`">
    <v-list-tile-content v-ripple>
      <v-list-tile-title>{{ track.track.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ track.events.length }} events |
        {{ track.days.map(day => `${day.day.name} - ${day.rooms.map(room => room.name).join(', ')}`).join(' | ') }}
        <room-state :room="todayRoom"></room-state>
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import RoomState from './RoomState'

export default {
  name: 'conference-track',

  props: ['track'],

  components: {
    RoomState
  },

  computed: {
    todayRoom () {
      // TODO: check if it's really today
      if (this.track.rooms.length === 1) {
        return this.track.rooms[0].room
      } else {
        const todaySunday = new Date().getDay() === 0
        const todayRooms = this.track.rooms.filter(room => room.days.filter(day => todaySunday ? day === 'Sunday' : day === 'Saturday').length > 0)
        if (todayRooms.length === 1) {
          return todayRooms[0].room
        }
      }
    }
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
</style>
