<template>
  <v-container fluid>
    <v-layout justify-center align-top>
      <v-card :style="{borderTopColor: event.track.color}">
        <v-card-title primary-title class="title"><h2>
          {{ event.title }}
          <favourite :event="event"></favourite>
        </h2></v-card-title>
        <v-card-title class="grey--text text--lighten-1">
          {{ event.persons.join(', ') }},
          {{ event.start }}-{{ event.end }} {{ event.day.name }},
          &nbsp;<span><router-link :to="`/track/${event.track.name}`">{{ event.track.name }}</router-link></span>,
          &nbsp;<span><router-link :to="`/map/${event.room.building.name}`">{{ event.room.name }}</router-link></span>
          &nbsp;<span class="roomstate"><v-icon :color="state.color" :title="state.name">{{ state.icon }}</v-icon></span>,
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
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from '@/logic/Event'
import Favourite from '@/components/Favourite'

export default {
  name: 'event-details',

  components: {
    favourite: Favourite
  },

  props: [
    'eventId'
  ],

  computed: {
    event () {
      return this.events[this.eventId] || new Event()
    },

    state () {
      return this.roomState(this.event.room.name)
    },

    ...mapGetters([
      'events',
      'roomState'
    ])
  }
}
</script>

<style>
  .v-card {
    width: 100%;
    border-top: 10px solid transparent;
  }

  .v-card__title, .v-card__text {
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

  .roomstate .icon {
    font-size: 18px;
    vertical-align: text-bottom;
    cursor: default;
  }

  .v-card__title a {
    text-decoration: none;
  }
</style>


