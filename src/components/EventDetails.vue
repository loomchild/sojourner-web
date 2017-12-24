<template>
  <v-layout justify-center align-top>
    <v-card :style="{borderTopColor: event.track.color}">
      <v-card-title primary-title class="title">
        <h2>{{ event.title }}</h2>
        <span class="favourite" @click="toggleFavourite()">
          <v-icon color="yellow darken-2" v-if="favourite">star</v-icon>
          <v-icon color="grey lighten-1" v-else>star_border</v-icon>
        </span>
      </v-card-title>
      <v-card-title>
        {{ event.persons.join(', ') }},
        {{ event.start }}-{{ event.end }},
        {{ event.room }},
        {{ event.track.name }}
      </v-card-title>
      <v-card-title v-if="event.subtitle" class="subtitle"><h3>{{ event.subtitle }}</h3></v-card-title>
      <v-card-text v-if="event.abstract" v-html="event.abstract" class="abstract"></v-card-text>
      <v-card-text v-if="event.description" v-html="event.description" class="description"></v-card-text>
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
    border-top: 10px solid transparent;
  }

  .card__title, .card__text {
    padding-bottom: 0;
  }

  .abstract {
    font-style: italic;
  }

  .description {
    padding-top: 0;
  }

  .favourite {
    margin-left: 8px;
    cursor: pointer;
  }
</style>


