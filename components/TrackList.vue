<template>
  <div>
    <day-tabs>
      <template v-for="dayTracks in tracks">
        <v-tab :key="dayTracks.day.name" ripple :disabled="dayTracks.tracks.length === 0">
          {{ dayTracks.day.name }}
        </v-tab>
        <v-tab-item :key="dayTracks.day.name">
          <v-list v-if="dayTracks.tracks.length > 0" three-line class="pa-0">
            <template v-for="(track, index) in dayTracks.tracks">
              <conference-track :key="`${dayTracks.day.name}-${track.track.name}`" :track="track"></conference-track>
              <v-divider v-if="index + 1 < dayTracks.tracks.length" :key="`div-${dayTracks.day.name}-${track.track.name}`"></v-divider>
            </template>
          </v-list>
          <v-list v-else>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  There are no tracks on this list.
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-tab-item>
      </template>
    </day-tabs>
    <div class="hidden-sm-and-down mb-5"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ConferenceTrack from '@/components/ConferenceTrack'
import DayTabs from '@/components/DayTabs'

export default {
  name: 'Tracks',

  components: {
    DayTabs,
    ConferenceTrack
  },

  props: {
    tracks: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters([
      'tab'
    ])
  },

  created () {
    this.switchTabIfNoTracks()
  },

  activated () {
    this.switchTabIfNoTracks()
  },

  methods: {
    switchTabIfNoTracks () {
      if (!this.tracks[this.tab] || this.tracks[this.tab].tracks.length === 0) {
        const tab = this.tracks.findIndex(dayTracks => dayTracks && dayTracks.tracks.length > 0)
        this.setTab(tab !== -1 ? tab : 0)
      }
    },

    ...mapActions([
      'setTab'
    ])
  }

}
</script>

<style scoped>
.v-list {
  border: 1px solid #0000001e;
}
</style>
