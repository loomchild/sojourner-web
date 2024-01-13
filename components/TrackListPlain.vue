<template>
  <v-list v-if="tracks.length > 0" three-line class="pa-0">
    <template v-for="(track, index) in tracks">
      <conference-track :key="index" :track="track"></conference-track>
      <v-divider v-if="index + 1 < tracks.length" :key="`div-${index}`"></v-divider>
    </template>
  </v-list>
  <v-list v-else>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle>
          There are no tracks on this list.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import ConferenceTrack from '@/components/ConferenceTrack'

export default {
  name: 'TrackListPlain',

  components: {
    ConferenceTrack
  },

  props: {
    tracks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.v-list {
  border: 1px solid #0000001e !important;
}
</style>
