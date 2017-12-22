<template>
  <v-list three-line>
    <template v-for="(event, index) in events">
      <event :event="event"></event>
      <v-divider v-if="index + 1 < events.length"></v-divider>
    </template>
    <infinite-loading @infinite="infiniteLoad">
      <span slot="no-results"></span>
      <span slot="no-more"></span>
    </infinite-loading>
  </v-list>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

import {getAllEvents} from '../data/schedule'

import Event from './Event'

const PAGE_SIZE = 25

export default {
  name: 'all-events',

  components: {
    InfiniteLoading,
    'event': Event
  },

  data: () => ({
    events: []
  }),

  methods: {
    infiniteLoad (state) {
      return getAllEvents().then(events => {
        this.events.push(...events.slice(this.events.length, this.events.length + PAGE_SIZE))

        if (this.events.length < events.length) {
          return state.loaded()
        } else {
          return state.complete()
        }
      })
    }
  },

  created: function () {
    getAllEvents().then(events => { this.events = events.slice(0, PAGE_SIZE) })
  }
}
</script>

<style>
  .list {
    width: 100%;
    padding: 0;
  }
</style>
