<template>
  <v-container class="content">
    <page-title></page-title>
    <event-list :events="allEvents" show-room :show-track="!hasRooms" show-persons></event-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'AllEvents',

  components: {
    EventList,
    PageTitle
  },

  computed: {
    ...mapGetters({
      allEvents: 'allEvents',
      hasRooms: 'hasRooms'
    })
  },

  metaInfo () {
    return {
      title: 'All Events'
    }
  }
}
</script>

<style scoped>
</style>
