<template>
  <v-container fluid>
    <v-layout justify-center align-top>
      <v-list three-line>
        <template v-for="event in events">
          <event :event="event" :key="event.id"></event>
        </template>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from '@/components/Event'

export default {
  name: 'room-events',

  components: {
    'event': Event
  },

  props: [
    'roomName'
  ],

  computed: {
    events () {
      return this.roomEvents(this.roomName)
    },

    ...mapGetters([
      'roomEvents'
    ])
  },

  metaInfo () {
    return {
      title: this.roomName
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

  .v-divider.day {
    border-width: 12px;
    border-color: #303030;
  }
</style>


