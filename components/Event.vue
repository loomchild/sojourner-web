<template>
  <v-list-tile class="event" ripple :style="{borderLeftColor: event.track.color}">
    <v-list-tile-content v-ripple @click="goToEvent(event.id)">
      <v-list-tile-title class="event-title">{{ event.title }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ event.persons.join(', ') }},
        {{ event.start }}-{{ event.end }} {{ event.day.name }},
        {{ event.track.name }},
        {{ event.room.name }}
      </v-list-tile-sub-title>
      <v-list-tile-sub-title class="event-subtitle grey--text text--lighten-3">{{ event.subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <favourite :event="event"></favourite>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-icon :color="state.color" :title="state.name">{{ state.icon }}</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {mapGetters} from 'vuex'
import Favourite from './Favourite'

export default {
  name: 'event',

  props: ['event'],

  components: {
    favourite: Favourite
  },

  computed: {
    state () {
      return this.roomState(this.event.room.name)
    },

    ...mapGetters([
      'roomState'
    ])
  },

  methods: {
    goToEvent () {
      setTimeout(() => this.$router.push(`/event/${this.event.id}`), 200)
    }
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

  .roomstate .icon {
    font-size: 18px;
    vertical-align: text-bottom;
    cursor: default;
  }

  div.v-list__tile__title {
    text-overflow: clip;
  }

  div.v-list__tile__sub-title {
    white-space: nowrap !important;
  }

  div.v-list__tile__action:last-of-type {
    min-width: 40px;
  }
</style>

