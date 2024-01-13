<template>
  <div>
    <day-tabs @change="resetTracks">
      <template v-for="dayTracks in currentTracks">
        <v-tab :key="dayTracks.day.name" ripple :disabled="dayTracks.tracks.length === 0">
          {{ dayTracks.day.name }}
        </v-tab>
        <v-tab-item :key="dayTracks.day.name">
          <track-list-plain :tracks="dayTracks.tracks" />
        </v-tab-item>
      </template>
    </day-tabs>
    <div class="hidden-sm-and-down mb-12"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DayTabs from '@/components/DayTabs'
import TrackListPlain from '@/components/TrackListPlain'

export default {
  name: 'TrackList',

  components: {
    DayTabs,
    TrackListPlain
  },

  props: {
    tracks: {
      type: Array,
      default: () => []
    }
  },

  data: function () {
    return {
      currentTracks: this.tracks
    }
  },

  computed: {
    ...mapGetters([
      'tab',
      'userInitialized'
    ])
  },

  watch: {
    tab () {
      this.resetTracks()
    },

    userInitialized () {
      this.resetTracks()
    }
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

    resetTracks () {
      this.currentTracks = this.tracks
    },

    ...mapActions([
      'setTab'
    ])
  }

}
</script>
