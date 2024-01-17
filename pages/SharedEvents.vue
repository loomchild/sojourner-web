<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <event-list :events="events" show-track show-persons></event-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'SharedEvents',

  components: {
    EventList,
    PageTitle
  },

  props: {
    eventIds: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    events () {
      return this.selectedEvents(this.eventIds)
    },

    ...mapGetters([
      'selectedEvents'
    ])
  },

  metaInfo () {
    return {
      title: 'Shared bookmarks'
    }
  }
}
</script>

<style scoped>
</style>
