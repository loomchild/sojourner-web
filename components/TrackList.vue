<template>
  <div>
    <v-tabs class="days" color="primary" slider-color="none" v-model="day" dark>
      <template v-for="dayTracks in tracks">
        <v-tab ripple :disabled="dayTracks.tracks.length === 0">
          {{ dayTracks.day.name }}
        </v-tab>
        <v-tab-item :transition="transition" :reverseTransition="transition">
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
import ConferenceTrack from '@/components/ConferenceTrack'

export default {
  name: 'tracks',

  components: {
    'conference-track': ConferenceTrack
  },

  props: [
    'tracks'
  ],

  data: () => ({
    day: 0,
    transition: undefined
  }),

  computed: {
    todayTracks () {
      return (this.tracks[this.day] && this.tracks[this.day].tracks) || []
    }
  },

  activated () {
    if (this.todayTracks.length === 0) {
      this.transition = 'none'
      this.day = this.tracks.findIndex(dayTracks => dayTracks.tracks.length > 0)
      setTimeout(() => {
        this.transition = undefined
      }, 200)
    }
  }
}
</script>

<style>
</style>
