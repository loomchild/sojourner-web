<template>
  <div>
    <v-text-field ref="search" solo clearable hide-details placeholder="Enter your keywords" prepend-inner-icon="search" v-model="query" autocapitalize="none"/>
    <v-list three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import _ from 'lodash'

import {mapActions} from 'vuex'

import Event from '@/components/Event'

export default {
  name: 'all-events',

  components: {
    'event': Event
  },

  data: () => ({
    query: '',
    events: []
  }),

  watch: {
    query () {
      if (!this.query || this.query.length <= 1) {
        this.events = []
        return
      }
      this.search()
    }
  },

  activated () {
    this.$refs.search.focus()
  },

  methods: {
    search: _.debounce(function () {
      if (!this.query || this.query.length <= 1) {
        this.events = []
        return
      }
      this.searchEvents(this.query)
        .then(events => {
          this.events = events
        })
    }, 150),

    ...mapActions([
      'searchEvents'
    ])
  },

  metaInfo () {
    return {
      title: 'Search'
    }
  }
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .v-list {
    width: 100%;
    padding: 0;
  }
</style>
