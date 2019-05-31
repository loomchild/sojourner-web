<template>
  <div>
    <v-list v-if="tracks.length > 1" three-line>
      <template v-for="(track, index) in tracks">
        <conference-track :track="track"></conference-track>
        <v-divider v-if="index + 1 < tracks.length"></v-divider>
      </template>
    </v-list>
    <v-list v-if="tracks.length === 1" three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider v-if="index + 1 < events.length" :class="{'day': events[index].day.index < events[index + 1].day.index}"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import ConferenceTrack from '@/components/ConferenceTrack'
import Event from '@/components/Event'

export default {
  name: 'type-tracks-or-events',

  components: {
    'conference-track': ConferenceTrack,
    'event': Event
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


