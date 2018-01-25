<template>
  <v-list-tile class="track" ripple :style="{borderLeftColor: track.track.color}" :to="`/track/${track.track.name}`">
    <v-list-tile-content>
      <v-list-tile-title class="track-name">{{ track.track.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ track.events.length }} events,
        {{ track.rooms.map(room => `${room.room.name} (${room.days.join(' and ')})`).join(', ') }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon :color="state.color" :title="state.name">{{ state.icon }}</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'conference-track',

  props: ['track'],

  computed: Object.assign({
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
    }
  }, mapGetters([
    'roomState'
  ]))
}
</script>

<style>
  .track {
    margin-left: 1px;
    border-left: 10px solid transparent;
  }

  li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .track-name {
    font-weight: bold;
  }
</style>


