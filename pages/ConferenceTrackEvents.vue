<template>
  <v-container fluid>
    <v-layout justify-center align-top>
      <v-list three-line>
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
  },

  metaInfo () {
    return {
      title: this.trackName
    }
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
</style>

