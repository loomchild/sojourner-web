<template>
  <v-container fluid>
    <v-layout justify-center align-top>
      <v-list three-line>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title><h2>{{ trackName }}</h2></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider class="day"/>
        <template v-for="(event, index) in events">
          <event :event="event"></event>
          <v-divider v-if="index + 1 < events.length" :class="{'day': events[index].day.index < events[index + 1].day.index}"></v-divider>
        </template>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from '@/components/Event'

export default {
  name: 'conference-track-events',

  components: {
    'event': Event
  },

  props: [
    'trackName'
  ],

  computed: {
    events () {
      return this.trackEvents(this.trackName)
    },

    ...mapGetters([
      'trackEvents'
    ])
  }
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

