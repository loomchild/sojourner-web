<template>
  <v-list three-line>
    <template v-for="(event, index) in events">
      <event :event="event"></event>
      <v-divider v-if="index + 1 < events.length"></v-divider>
    </template>
  </v-list>
</template>

<script>
import {getAllEvents} from '../data/schedule'

import Event from './Event'

export default {
  name: 'all-events',

  components: {
    'event': Event
  },

  data: () => ({
    events: []
  }),

  created: function () {
    getAllEvents().then(events => { this.events = events })
  }
}
</script>

<style>
  .list {
    width: 100%;
    padding: 0;
  }
</style>
