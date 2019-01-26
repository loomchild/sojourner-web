<template>
  <v-layout justify-center align-top>
    <v-list three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider v-if="index + 1 < events.length" :class="{'day': events[index].day.index < events[index + 1].day.index}"></v-divider>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from './Event'

export default {
  name: 'all-events',

  components: {
    'event': Event
  },

  computed: mapGetters({
    events: 'allEvents'
  })
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .v-list {
    width: 100%;
    padding: 0;
  }

  .v-divider.day {
    border-width: 12px;
    border-color: #303030;
  }
</style>
