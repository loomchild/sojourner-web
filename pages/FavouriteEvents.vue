<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <event-list :events="events" show-room :show-track="!hasRooms" show-persons></event-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'FavouriteEvents',

  components: {
    EventList,
    PageTitle
  },

  data: () => ({
    events: []
  }),

  computed: mapGetters([
    'favouriteEvents',
    'favouriteAddedEvents',
    'hasRooms'
  ]),

  watch: {
    favouriteEvents () {
      this.events = this.favouriteAddedEvents(this.events)
    }
  },

  created () {
    this.initializeFavouriteEvents()
  },

  activated () {
    this.initializeFavouriteEvents()
  },

  methods: {
    initializeFavouriteEvents () {
      this.events = this.favouriteEvents
    }
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
