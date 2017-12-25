<template>
  <v-layout justify-center align-top>
    <v-list three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider v-if="index + 1 < events.length"></v-divider>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import {getTrackEvents} from '../data/schedule'

import Event from './Event'

export default {
  name: 'conference-track-events',

  components: {
    'event': Event
  },

  data: () => ({
    events: []
  }),

  created: function () {
    const trackName = this.$route.params.name
    getTrackEvents(trackName).then(events => { this.events = events })
  }
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .list {
    width: 100%;
    padding: 0;
  }
</style>

