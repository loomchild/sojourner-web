<template>
  <event-list :events="events"></event-list>
</template>

<script>
import {mapGetters} from 'vuex'

import EventList from '@/components/EventList'

export default {
  name: 'conference-track-events',

  components: {
    'event-list': EventList
  },

  props: [
    'trackName'
  ],

  computed: {
    events () {
      return this.trackEvents(this.trackName)
    },

    ...mapGetters([
      'trackEvents'
    ])
  },

  metaInfo () {
    return {
      title: this.trackName
    }
  }
}
</script>

<style>
</style>
