<template>
  <v-container class="content">
    <page-title back-arrow="secondary"></page-title>
    <event-list :events="events"></event-list>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'conference-track-events',

  components: {
    EventList,
    PageTitle
  },

  props: [
    'trackName'
  ],

  computed: {
    events () {
      return this.trackEvents(this.trackName)
    },

    ...mapGetters([
      'trackEvents'
    ])
  },

  metaInfo () {
    return {
      title: this.trackName
    }
  }
}
</script>

<style scoped>
</style>
