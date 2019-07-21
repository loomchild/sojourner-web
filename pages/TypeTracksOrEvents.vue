<template>
  <v-container class="content">
    <page-title back-arrow="secondary"></page-title>
    <track-list v-if="multipleTracks" :tracks="tracks"></track-list>
    <event-list v-else :events="events"></event-list>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import TrackList from '@/components/TrackList'
import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'type-tracks-or-events',

  components: {
    TrackList,
    EventList,
    PageTitle
  },

  props: [
    'typeName'
  ],

  computed: {
    tracks () {
      return this.typeTracks(this.typeName)
    },

    events () {
      return this.typeEvents(this.typeName)
    },

    multipleTracks () {
      return this.tracks.some(track => track.tracks.length > 1)
    },

    ...mapGetters({
      typeTracks: 'typeTrackStats',
      typeEvents: 'typeEvents'
    })
  },

  metaInfo () {
    return {
      title: this.typeName
    }
  }
}
</script>

<style scoped>
</style>
