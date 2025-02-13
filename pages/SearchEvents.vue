<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <v-text-field ref="search" v-model="query" solo clearable hide-details placeholder="Enter your keywords" prepend-inner-icon="mdi-magnify" autocapitalize="none" color="secondary" class="search" />
    <v-list v-if="validQuery && events.length > 0" three-line class="pa-0">
      <template v-for="(event, index) in events">
        <event :key="`ev-${event.id}`" :event="event" show-day show-room show-persons show-track></event>
        <v-divider v-if="index + 1 < events.length" :key="`div-${event.id}`"></v-divider>
      </template>
    </v-list>
    <v-list v-if="validQuery && events.length == 0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>
            No events found.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div v-if="!validQuery" class="search-help">
      <v-icon>mdi-subdirectory-arrow-left</v-icon> Start typing to search for an event by title, description, track, speaker, room, etc.
    </div>
    <div class="hidden-sm-and-down mb-12"></div>
  </v-container>
</template>

<script>
import debounce from 'lodash/debounce'
import omit from 'lodash/omit'
import { mapGetters } from 'vuex'
import Event from '@/components/Event'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'AllEvents',

  components: {
    Event,
    PageTitle
  },

  data: () => ({
    events: []
  }),

  computed: {
    query: {
      get () {
        return this.$route.query.q || ''
      },
      set (query) {
        if (this.query === query) {
          return
        }
        if (!query) {
          this.$router.replace({ query: omit(this.$route.query, 'q') })
        } else {
          this.$router.replace({ query: { ...this.$route.query, q: query } })
        }
      }
    },

    validQuery () {
      return this.query && this.query.length >= 2
    },

    ...mapGetters([
      'hasRooms',
      'searchEvents'
    ])
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
    this.rawSearch()
  },

  mounted () {
    if (!this.query) {
      this.$refs.search.focus()
    }
  },

  methods: {
    search: debounce(function () {
      this.rawSearch()
    }, 150),

    rawSearch () {
      if (!this.validQuery) {
        this.events = []
        return
      }
      this.events = this.searchEvents(this.query)
    }
  },

  metaInfo () {
    return {
      title: 'Search'
    }
  }
}
</script>

<style scoped>
.search {
  position: sticky;
  width: 100%;
  top: 56px;
  z-index: 100;
}

.search-help {
  padding: 12px;
}

.search-help i {
  transform: rotate(90deg);
}

@media only screen and (min-width:960px) {
  .search {
    top: 0;
  }

  .v-list {
    border: 1px solid #0000001e !important;
    width: 100%;
  }
}
</style>
