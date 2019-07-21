<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <event-list :events="events" show-room></event-list>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'favourite-events',

  components: {
    EventList,
    PageTitle
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
