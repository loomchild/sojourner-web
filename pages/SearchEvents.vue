<template>
  <v-container fluid>
    <v-text-field ref="search" solo clearable placeholder="Enter your keywords" prepend-inner-icon="search" v-model="query" autocapitalize="none"/>
    <v-layout justify-center align-top>
      <v-list three-line>
        <template v-for="(event, index) in events">
          <event :event="event"></event>
          <v-divider v-if="index + 1 < events.length" :class="{'day': events[index].day.index < events[index + 1].day.index}"></v-divider>
        </template>
      </v-list>
    </v-layout>
  </v-container>
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

  .v-divider.day {
    border-width: 12px;
    border-color: #303030;
  }
</style>
