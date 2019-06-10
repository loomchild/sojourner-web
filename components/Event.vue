<template>
  <v-list-tile class="event" :to="`/event/${event.id}`"> 
    <v-list-tile-content v-ripple>
      <v-list-tile-sub-title>
        <span>{{ event.start }}-{{ event.end }}</span>
        <span v-if="showRoom">
          | {{ event.room.name }}
          <v-icon color="secondary" :title="state.name">{{ state.icon }}</v-icon>
        </span>
        <span v-if="!showRoom && event.persons.length > 0">| {{ event.persons.join(', ') }}</span>
      </v-list-tile-sub-title>
      <v-list-tile-title class="event-title">{{ event.title }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action @click.prevent="">
      <favourite :event="event"></favourite>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import {mapGetters} from 'vuex'
import Favourite from './Favourite'

export default {
  name: 'event',

  props: [
    'event',
    'showRoom'
  ],

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
  }
}
</script>

<style>
.event .v-list__tile__title {
  white-space: normal;
  height: auto;
  max-height: 48px;
}

.event .v-list__tile__sub-title {
  color: var(--v-secondary-base) !important;
}

.event .v-list__tile__sub-title {
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline;
}

.event .v-list__tile__sub-title i {
  font-size: 17px;
  vertical-align: text-bottom;
  margin-left: 1px;
}
</style>
