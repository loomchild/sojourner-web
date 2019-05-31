<template>
  <div>
    <track-list v-if="tracks.length > 1" :tracks="tracks"></track-list>
    <event-list v-if="tracks.length === 1" :events="events"></event-list>
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
