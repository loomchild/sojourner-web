<template>
  <v-list-tile class="room" ripple :to="`/room/${room.name}`">
    <v-list-tile-content>
      <v-list-tile-title class="room-name">{{ room.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
      </v-list-tile-sub-title>
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
    border-left: 10px solid dimgray;
  }

  li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .room-name {
    font-weight: bold;
  }
</style>



