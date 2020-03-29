<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <v-text-field ref="search" v-model="query" solo clearable hide-details placeholder="Enter your keywords" prepend-inner-icon="search" autocapitalize="none" color="secondary" />
    <v-list v-if="validQuery && events.length > 0" three-line class="pa-0">
      <template v-for="(event, index) in events">
        <event :key="`ev-${event.id}`" :event="event" show-day show-room show-persons></event>
        <v-divider v-if="index + 1 < events.length" :key="`div-${event.id}`"></v-divider>
      </template>
    </v-list>
    <v-list v-if="validQuery && events.length == 0">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-sub-title>
            No events found.
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <div v-if="!validQuery" class="search-help">
      <v-icon>subdirectory_arrow_left</v-icon> Start typing to search for an event by title, description, track, speaker, room, etc.
    </div>
    <div class="hidden-sm-and-down mb-5"></div>
  </v-container>
</template>

<script>
import _ from 'lodash'
import { mapActions } from 'vuex'
import Event from '@/components/Event'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'AllEvents',

  components: {
    Event,
    PageTitle
  },

  data: () => ({
    query: '',
    events: []
  }),

  computed: {
    validQuery () {
      return this.query && this.query.length >= 2
    }
  },

  watch: {
    query () {
      if (!this.query || this.query.length <= 1) {
        this.events = []
        return
      }
      this.search()
    }
  },

  created () {
    if (this.$route.query.q) {
      this.query = this.$route.query.q
    }
  },

  activated () {
    this.$refs.search.focus()
  },

  methods: {
    search: _.debounce(function () {
      if (!this.validQuery) {
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
