<template>
  <v-list-tile class="track" :to="`/track/${track.track.name}`">
    <v-list-tile-content v-ripple>
      <v-list-tile-title>{{ track.track.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ track.events.length }} events |
        {{ track.room.name }}
        <room-state :room="track.room"></room-state>
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import RoomState from './RoomState'

export default {
  name: 'ConferenceTrack',

  components: {
    RoomState
  },

  props: {
    track: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.track .v-list__tile__title {
  white-space: normal;
  height: auto;
  max-height: 48px;
}

.track .v-list__tile__sub-title {
  color: var(--v-secondary-base) !important;
}
</style>
