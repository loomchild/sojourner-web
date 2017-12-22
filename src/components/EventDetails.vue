<template>
  <v-layout justify-center align-top>
  <div>{{ JSON.stringify(event) }}</div>
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
</style>


