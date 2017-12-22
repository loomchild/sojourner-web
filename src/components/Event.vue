<template>
  <v-list-tile class="event" ripple :style="{borderLeftColor: event.track.color}">
    <v-list-tile-content v-ripple @click="goToEvent(event.id)">
      <v-list-tile-title class="event-title">{{ event.title }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ event.persons.join(', ') }} ({{ event.start }}-{{ event.end }}, {{ event.room }}, {{ event.track.name }})</v-list-tile-sub-title>
      <v-list-tile-sub-title class="event-subtitle grey--text text--lighten-3">{{ event.subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action @click="toggleFavourite()">
      <v-icon color="yellow darken-2" v-if="favourite">star</v-icon>
      <v-icon color="grey lighten-1" v-else>star_border</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {isFavourite, setFavourite, unsetFavourite} from '../data/favourite'

export default {
  name: 'event',

  props: ['event'],

  data: () => ({
    favourite: false
  }),

  methods: {
    toggleFavourite () {
      if (this.favourite) {
        unsetFavourite(this.event.id)
          .then(() => { this.favourite = false })
      } else {
        setFavourite(this.event.id)
          .then(() => { this.favourite = true })
      }
    },

    goToEvent () {
      setTimeout(() => this.$router.push(`event/${this.event.id}`), 200)
    }
  },

  created: function () {
    isFavourite(this.event.id).then(f => { this.favourite = f })
  }
}
</script>

<style>
  .event {
    margin-left: 1px;
    border-left: 10px solid transparent;
  }

  li div {
    white-space: nowrap !important;
    overflow: hidden;
  }

  .event-title {
    font-weight: bold;
  }
</style>

