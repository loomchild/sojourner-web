<template>
  <v-layout justify-center align-top>
    <v-list three-line>
      <template v-for="(track, index) in tracks">
        <conference-track :track="track"></conference-track>
        <v-divider v-if="index + 1 < tracks.length"></v-divider>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import {getAllTrackStats} from '../data/schedule'

import ConferenceTrack from './ConferenceTrack'

export default {
  name: 'conference-tracks',

  components: {
    'conference-track': ConferenceTrack
  },

  data: () => ({
    tracks: []
  }),

  created: function () {
    getAllTrackStats().then(tracks => { this.tracks = tracks })
  }
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .list {
    width: 100%;
    padding: 0;
  }
</style>

