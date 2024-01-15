<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <event-list-plain :events="events" show-room :show-track="!hasRooms" show-persons></event-list-plain>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import EventListPlain from '@/components/EventListPlain'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'SharedEvents',

  components: {
    EventListPlain,
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
      'hasRooms',
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
