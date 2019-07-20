<template>
  <v-container fluid class="content">
    <v-text-field ref="search" solo clearable hide-details placeholder="Enter your keywords" prepend-inner-icon="search" v-model="query" autocapitalize="none" color="secondary"/>
    <v-layout align-top>
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
    <div class="hidden-sm-and-down mb-5"></div>
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
.search-help {
  padding: 12px;
}

.search-help i {
  transform: rotate(90deg);
}

@media only screen and (min-width:960px) {
  .v-list {
    border: 1px solid #0000001e;
    width: 100%;
  }
}
</style>
