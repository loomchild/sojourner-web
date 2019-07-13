<template>
  <event-list :events="events" show-room></event-list>
</template>

<script>
import {mapGetters} from 'vuex'

import EventList from '@/components/EventList'

export default {
  name: 'favourite-events',

  components: {
    'event-list': EventList
  },

  data: () => ({
    events: []
  }),

  computed: mapGetters([
    'favouriteEvents',
    'favouriteAddedEvents'
  ]),

  watch: {
    favouriteEvents () {
      this.events = this.favouriteAddedEvents(this.events)
    }
  },

  methods: {
    initializeFavouriteEvents () {
      this.events = this.favouriteEvents
    }
  },

  created () {
    this.initializeFavouriteEvents()
  },

  activated () {
    this.initializeFavouriteEvents()
  },

  metaInfo () {
    return {
      title: 'Bookmarks'
    }
  }
}
</script>

<style scoped>
</style>
