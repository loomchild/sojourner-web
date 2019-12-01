<template>
  <v-container class="content">
    <page-title></page-title>
    <event-list :events="allEvents" show-type></event-list>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import EventList from '@/components/EventList'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'all-events',

  components: {
    EventList,
    PageTitle
  },

  computed: {
    ...mapGetters({
      allEvents: 'allEvents'
    })
  },

  metaInfo () {
    return {
      title: 'All Events'
    }
  }
}
</script>

<style scoped>
</style>
