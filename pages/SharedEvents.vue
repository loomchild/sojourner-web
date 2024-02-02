<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <event-list-plain v-if="order" :events="eventsOrdered" show-day show-track show-persons></event-list-plain>
    <event-list v-else :events="events" show-track show-persons></event-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import EventList from '@/components/EventList'
import EventListPlain from '@/components/EventListPlain'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'SharedEvents',

  components: {
    EventList,
    EventListPlain,
    PageTitle
  },

  props: {
    eventIds: {
      type: Array,
      default: () => []
    },
    order: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    events () {
      return this.selectedEvents(this.eventIds)
    },

    eventsOrdered () {
      return this.selectedEventsOrdered(this.eventIds)
    },

    ...mapGetters([
      'selectedEvents',
      'selectedEventsOrdered'
    ])
  },

  metaInfo () {
    return {
      title: this.order ? 'Recommended talks' : 'Shared bookmarks'
    }
  }
}
</script>

<style scoped>
</style>
