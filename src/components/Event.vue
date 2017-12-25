<template>
  <v-list-tile class="event" ripple :style="{borderLeftColor: event.track.color}">
    <v-list-tile-content v-ripple @click="goToEvent(event.id)">
      <v-list-tile-title class="event-title">{{ event.title }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ event.persons.join(', ') }},
        {{ event.start }}-{{ event.end }} {{ event.day.name }},
        {{ event.room.name }},
        {{ event.track.name }}
      </v-list-tile-sub-title>
      <v-list-tile-sub-title class="event-subtitle grey--text text--lighten-3">{{ event.subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action @click="toggleFavourite()">
      <v-icon color="yellow darken-2" v-if="favourite">star</v-icon>
      <v-icon color="grey lighten-1" v-else>star_border</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {isFavourite, toggleFavourite} from '../data/favourite'

export default {
  name: 'event',

  props: ['event'],

  data: () => ({
    favourite: false
  }),

  methods: {
    refreshFavourite () {
      isFavourite(this.event.id).then(favourite => {
        if (this.favourite !== favourite) {
          this.favourite = favourite
        }
      })
    },

    toggleFavourite () {
      this.favourite = !this.favourite
      toggleFavourite(this.event.id)
    },

    goToEvent () {
      setTimeout(() => this.$router.push(`event/${this.event.id}`), 200)
    }
  },

  created () {
    return this.refreshFavourite()
  },

  activated () {
    return this.refreshFavourite()
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

  .list__tile__action {
    cursor: pointer;
  }
</style>

