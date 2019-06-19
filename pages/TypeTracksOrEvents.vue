<template>
  <div>
    <track-list v-if="multipleTracks" :tracks="tracks"></track-list>
    <event-list v-else :events="events"></event-list>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import TrackList from '@/components/TrackList'
import EventList from '@/components/EventList'

export default {
  name: 'type-tracks-or-events',

  components: {
    'track-list': TrackList,
    'event-list': EventList
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

<style>
</style>
