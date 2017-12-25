<template>
  <v-list-tile class="track" ripple :style="{borderLeftColor: track.track.color}" :to="`/track/${track.track.name}`">
    <v-list-tile-content>
      <v-list-tile-title class="track-name">{{ track.track.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ track.events.length }} events,
        {{ track.days.join(' and ') }},
        {{ track.rooms.join(', ') }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'conference-track',

  props: ['track']
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


