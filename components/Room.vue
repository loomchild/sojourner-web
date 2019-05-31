<template>
  <v-list-tile class="room" :style="borderStyle" :to="`/room/${room.room.name}`">
    <v-list-tile-content v-ripple>
      <v-list-tile-title class="room-name">{{ room.room.name }}</v-list-tile-title>
      <v-list-tile-sub-title v-if="room.events.length > 0">
        {{ room.events.length }} events,
        {{ room.tracks.map(track => `${track.track.name} (${track.days.join(' and ')})`).join(', ') }}
      </v-list-tile-sub-title>
      <v-list-tile-sub-title v-else>0 events</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action v-if="state.icon" @click.prevent="">
      <v-icon color="secondary" :title="state.name">{{ state.icon }}</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {mapGetters} from 'vuex'

const getTracksColor = tracks => {
  if (!tracks || tracks.length === 0) {
    return 'dimgray'
  } else if (tracks.length > 1) {
    return '#654321'
  } else {
    return tracks[0].color
  }
}

export default {
  name: 'room',

  props: ['room'],

  computed: {
    borderStyle () {
      return {
        borderLeftColor: getTracksColor(this.room.days[1]),
        borderRightColor: getTracksColor(this.room.days[2])
      }
    },

    state () {
      return this.roomState(this.room.room.name)
    },

    ...mapGetters([
      'roomState'
    ])
  }
}
</script>

<style>
  .room {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .room-name {
    font-weight: bold;
  }
</style>
