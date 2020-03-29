<template>
  <v-container class="content">
    <page-title :back-arrow="typeColor"></page-title>
    <track-list v-if="multipleTracks" :tracks="tracks"></track-list>
    <event-list v-else :events="events" show-room show-persons></event-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import TrackList from '@/components/TrackList'
import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'TypeTracksOrEvents',

  components: {
    TrackList,
    EventList,
    PageTitle
  },

  props: {
    typeName: {
      type: String,
      required: true
    }
  },

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

    typeColor () {
      const type = this.type(this.typeName)
      return type ? type.arrowColor : 'secondary'
    },

    ...mapGetters({
      type: 'type',
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
