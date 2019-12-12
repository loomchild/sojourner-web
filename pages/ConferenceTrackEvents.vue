<template>
  <v-container class="content">
    <page-title :back-arrow="trackColor"></page-title>
    <event-list :events="events" show-room show-persons></event-list>
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

    trackColor () {
      const track = this.tracks[this.trackName]
      return track ? track.type.arrowColor : 'secondary'
    },

    ...mapGetters([
      'tracks',
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
