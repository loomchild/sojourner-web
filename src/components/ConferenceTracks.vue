<template>
  <v-container fluid>
    <v-layout justify-center align-top>
      <v-list three-line>
        <template v-for="(track, index) in tracks">
          <conference-track :track="track"></conference-track>
          <v-divider v-if="index + 1 < tracks.length"></v-divider>
        </template>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import ConferenceTrack from './ConferenceTrack'

export default {
  name: 'conference-tracks',

  components: {
    'conference-track': ConferenceTrack
  },

  computed: mapGetters({
    tracks: 'allTrackStats'
  })
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .v-list {
    width: 100%;
    padding: 0;
  }
</style>

