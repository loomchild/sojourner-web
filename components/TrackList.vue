<template>
  <div>
    <v-tabs class="days" color="primary" slider-color="none" :value="tab" @change="setTab" dark>
      <template v-for="dayTracks in tracks">
        <v-tab ripple :disabled="dayTracks.tracks.length === 0">
          {{ dayTracks.day.name }}
        </v-tab>
        <v-tab-item>
          <v-list three-line>
            <template v-for="(track, index) in dayTracks.tracks">
              <conference-track :track="track"></conference-track>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-tab-item>
      </template>
    </v-tabs>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ConferenceTrack from '@/components/ConferenceTrack'

export default {
  name: 'tracks',

  components: {
    'conference-track': ConferenceTrack
  },

  props: [
    'tracks'
  ],

  computed: {
    ...mapGetters([
      'tab'
    ])
  },

  methods: {
    ...mapActions([
      'setTab'
    ])
  }

}
</script>

<style scoped>
.v-list {
  padding: 0;
}
</style>
