<template>
  <v-list-tile class="room" ripple :style="borderStyle" :to="`/room/${room.room.name}`">
    <v-list-tile-content>
      <v-list-tile-title class="room-name">{{ room.room.name }}</v-list-tile-title>
      <v-list-tile-sub-title v-if="room.events.length > 0">
        {{ room.events.length }} events,
        {{ room.tracks.map(track => `${track.track.name} (${track.days.join(' and ')})`).join(', ') }}
      </v-list-tile-sub-title>
      <v-list-tile-sub-title v-else>0 events</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
const getDayColor = day => {
  if (!day || day.tracks.length > 1) {
    return 'dimgray'
  } else {
    return day.tracks[0].color
  }
}

export default {
  name: 'room',

  props: ['room'],

  computed: {
    borderStyle () {
      return {
        borderLeftColor: getDayColor(this.room.days[0]),
        backgroundColor: getDayColor(this.room.days[1])
      }
    }
  }
}
</script>

<style>
  .room {
    border-left: 10px solid transparent;
    padding-left: 10px;
    background-color: transparent;
  }

  .room > a {
    background-color: #424242;
  }

  .room > a:hover {
    background-color: #3a3a3a;
  }

  li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .room-name {
    font-weight: bold;
  }
</style>



