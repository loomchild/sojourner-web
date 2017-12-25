<template>
  <v-list-tile class="room" ripple :style="{borderLeftColor: room.tracks.length === 1 ? room.tracks[0].track.color : 'dimgray'}" :to="`/room/${room.room.name}`">
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
export default {
  name: 'room',

  props: ['room']
}
</script>

<style>
  .room {
    margin-left: 1px;
    border-left: 10px solid transparent;
  }

  li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .room-name {
    font-weight: bold;
  }
</style>



