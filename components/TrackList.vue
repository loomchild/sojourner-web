<template>
  <div>
    <v-list three-line>
      <template v-for="(track, index) in tracks">
        <conference-track :track="track"></conference-track>
        <v-divider></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import ConferenceTrack from '@/components/ConferenceTrack'

export default {
  name: 'tracks',

  components: {
    'conference-track': ConferenceTrack
  },

  props: [
    'tracks'
  ]
}
</script>

<style>
</style>
