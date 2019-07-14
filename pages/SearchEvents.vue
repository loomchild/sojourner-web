<template>
  <v-container fluid>
    <v-text-field ref="search" solo clearable hide-details placeholder="Enter your keywords" prepend-inner-icon="search" v-model="query" autocapitalize="none"/>
    <v-layout justify-center align-top>
      <v-list v-if="query" three-line class="pa-0">
        <template v-for="(event, index) in events">
          <event :event="event"></event>
          <v-divider></v-divider>
        </template>
      </v-list>
      <div v-else class="search-help">
        <v-icon>subdirectory_arrow_left</v-icon> Start typing to search for an event by title, description, track, speaker, room, etc.
      </div>
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

<style scoped>
.layout {
  width: 100%;
}

.v-list {
  width: 100%;
}

.search-help {
  padding: 12px;
}

.search-help i {
  transform: rotate(90deg);
}
</style>
