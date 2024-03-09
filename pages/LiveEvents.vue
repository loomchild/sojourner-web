<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <event-list-plain :events="liveEvents" show-room show-persons show-track></event-list-plain>
    <div class="hidden-sm-and-down mb-5"></div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import EventListPlain from '@/components/EventListPlain'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'FavouriteEvents',

  components: {
    EventListPlain,
    PageTitle
  },

  computed: {
    beforeLive () {
      return false
    },

    ...mapGetters([
      'liveEvents',
      'currentDate',
      'hasRooms'
    ])
  },

  metaInfo () {
    return {
      title: 'Live'
    }
  }
}
</script>

<style scoped>
</style>
