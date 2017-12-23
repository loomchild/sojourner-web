<template>
  <v-layout justify-center align-top>
    <v-card>
      <v-card-title primary-title><h2>{{ event.title }}</h2></v-card-title>
      <v-card-title><h3>{{ event.subtitle }}</h3></v-card-title>
      <v-card-text v-html="event.abstract"></v-card-text>
      <v-card-text v-html="event.description"></v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import {getEvent} from '../data/schedule'
import {isFavourite, toggleFavourite} from '../data/favourite'

export default {
  name: 'event-details',

  data: () => ({
    event: null,
    favourite: false
  }),

  methods: {
    toggleFavourite () {
      this.favourite = !this.favourite
      toggleFavourite(this.event.id)
    }
  },

  created: function () {
    const eventId = this.$route.params.id
    getEvent(eventId).then(event => { this.event = event })
    isFavourite(eventId).then(favourite => { this.favourite = favourite })
  }
}
</script>

<style>
  .card {
    width: 100%;
  }
</style>


