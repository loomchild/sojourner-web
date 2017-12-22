<template>
  <v-layout justify-center align-top>
    <v-list three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider v-if="index + 1 < events.length"></v-divider>
      </template>
      <infinite-loading @infinite="infiniteLoad" spinner="waveDots">
        <span slot="no-results"></span>
        <span slot="no-more"></span>
      </infinite-loading>
    </v-list>
  </v-layout>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

import {getAllEvents} from '../data/schedule'

import Event from './Event'

const PAGE_SIZE = 50

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
        const route = this.$route
        const page = this.$route.query.page ? parseInt(this.$route.query.page) : 0
        const newPage = page + 1
        this.$router.push(`${route.path}?page=${newPage}`)

        this.events.push(...events.slice(this.events.length, PAGE_SIZE * newPage))

        if (this.events.length < events.length) {
          return state.loaded()
        } else {
          return state.complete()
        }
      })
    }
  },

  created: function () {
    const page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
    getAllEvents().then(events => { this.events = events.slice(0, PAGE_SIZE * page) })
  }
}
</script>

<style>
  .list {
    width: 100%;
    padding: 0;
  }
</style>
