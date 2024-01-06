<template>
  <v-list-item class="track" ripple :to="{ name: 'track', params: { trackName: track.track.name } }">
    <v-list-item-content class="align-content-center">
      <v-list-item-title>{{ track.track.name }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ track.events.length }} events
        <span v-if="hasRooms">
          |
          <span v-for="(room, index) in track.rooms" :key="room.name">
            {{ room.name }}<room-state :room="room"></room-state><span v-if="index < track.rooms.length - 1">, </span>
          </span>
        </span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex'

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
  },

  computed: {
    ...mapGetters([
      'hasRooms'
    ])
  }
}
</script>

<style scoped>
.track .v-list-item__title {
  white-space: normal;
  height: auto;
  max-height: 48px;
}

.track .v-list-item__subtitle {
  color: var(--v-secondary-base) !important;
}

.track .v-list-item__content > :not(:last-child) {
  margin-bottom: 4px;
}
</style>
