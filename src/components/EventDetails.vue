<template>
  <v-layout justify-center align-top>
    <v-card :style="{borderTopColor: event.track.color}">
      <v-card-title primary-title class="title"><h2>
        {{ event.title }}
        <span class="favourite" @click="toggleFavouriteEvent()">
          <v-icon color="yellow darken-2" v-if="favourites[event.id]">star</v-icon>
          <v-icon color="grey lighten-1" v-else>star_border</v-icon>
        </span>
      </h2></v-card-title>
      <v-card-title class="grey--text text--lighten-1">
        {{ event.persons.join(', ') }},
        {{ event.start }}-{{ event.end }} {{ event.day.name }},
        {{ event.room.name }},
        {{ event.track.name }}
      </v-card-title>
      <v-card-title v-if="event.subtitle" class="subtitle"><h3>{{ event.subtitle }}</h3></v-card-title>
      <v-card-text v-if="event.abstract" v-html="event.abstract" class="abstract"></v-card-text>
      <v-card-text v-if="event.description" v-html="event.description" class="description"></v-card-text>
      <v-card-text v-if="event.links.length > 0" class="links">
        Links:
        <p v-for="link in event.links" class="link"><a :href="link.href">{{ link.title }}</a></p>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import {getEvent} from '../data/schedule'
import Event from '../logic/Event'

export default {
  name: 'event-details',

  data: () => ({
    event: new Event()
  }),

  computed: mapGetters([
    'favourites',
    'persistent'
  ]),

  methods: Object.assign({
    toggleFavouriteEvent () {
      this.toggleFavourite(this.event.id)
      if (!this.persistent) {
        this.showWarning('Persistence is disabled. Enable it via Settings, otherwise your data might be lost.')
      }
    }
  }, mapActions([
    'showWarning',
    'toggleFavourite'
  ])),

  created: function () {
    const eventId = this.$route.params.id
    getEvent(eventId).then(event => { this.event = event })
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

  .links {
    padding-top: 0;
    margin-bottom: 16px;
    counter-reset: link-counter;
  }

  .link {
    margin-bottom: 0;
  }

  .link:before {
    content: '['counter(link-counter)'] ';
    counter-increment: link-counter;
  }

  .favourite {
    cursor: pointer;
  }
</style>


