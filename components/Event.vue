<template>
  <v-list-tile class="event" ripple>
    <v-list-tile-content v-ripple v-go="`/event/${event.id}`">
      <v-list-tile-sub-title>
        <span>{{ event.start }}-{{ event.end }}</span>
        <span v-if="event.persons.length > 0">| {{ event.persons.join(', ') }}</span>
      </v-list-tile-sub-title>
      <v-list-tile-title class="event-title">{{ event.title }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <favourite :event="event"></favourite>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import Favourite from './Favourite'

export default {
  name: 'event',

  props: ['event'],

  components: {
    favourite: Favourite
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
</style>

