<template>
  <v-list three-line>
    <template v-for="(event, index) in events">
      <v-list-tile class="event" ripple :key="event.id" :style="{borderLeftColor: event.track.color}">
        <v-list-tile-content v-ripple @click="goToEvent(event.id)">
          <v-list-tile-title class="event-title">{{ event.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ event.persons.join(', ') }} ({{ event.start }}-{{ event.end }}, {{ event.room }}, {{ event.track.name }})</v-list-tile-sub-title>
          <v-list-tile-sub-title class="event-subtitle grey--text text--lighten-3">{{ event.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action @click="toggleFavourite(event.id)">
          <v-icon color="yellow darken-2" v-if="favourites[event.id]">star</v-icon>
          <v-icon color="grey lighten-1" v-else>star_border</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="index + 1 < events.length" :key="event.id"></v-divider>
    </template>
  </v-list>
</template>

<script>
import {getAllEvents} from '../data/schedule'
import {getFavourites, setFavourite, unsetFavourite} from '../data/favourite'

export default {
  name: 'all-events',

  data: () => ({
    events: null,
    favourites: null
  }),

  methods: {
    toggleFavourite (eventId) {
      if (this.favourites[eventId]) {
        unsetFavourite(eventId)
          .then(() => this.$delete(this.favourites, eventId))
      } else {
        setFavourite(eventId)
          .then(() => this.$set(this.favourites, eventId, true))
      }
    },

    goToEvent (eventId) {
      setTimeout(() => this.$router.push(`event/${eventId}`), 200)
    }
  },

  created: function () {
    this.events = getAllEvents()
    getFavourites().then(favourites => { this.favourites = favourites })
  }
}
</script>

<style>
  .list {
    width: 100%;
    padding: 0;
  }

  .event {
    margin-left: 1px;
    border-left: 10px solid transparent;
  }

  .list li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .event-title {
    font-weight: bold;
  }
</style>
