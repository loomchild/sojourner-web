<template>
  <v-container class="content">
    <page-title></page-title>
    <day-tabs>
      <template v-for="dayTracks in tracks">
        <v-tab ripple :disabled="dayTracks.tracks.length === 0">
          {{ dayTracks.day.name }}
        </v-tab>
        <v-tab-item>
          <v-list v-if="dayTracks.tracks.length > 0" three-line class="pa-0">
            <template v-for="(track, index) in dayTracks.tracks">
              <conference-track :track="track"></conference-track>
              <v-divider v-if="index + 1 < dayTracks.tracks.length"></v-divider>
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
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ConferenceTrack from '@/components/ConferenceTrack'
import DayTabs from '@/components/DayTabs'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'tracks',

  components: {
    DayTabs,
    ConferenceTrack,
    PageTitle
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
</style>
