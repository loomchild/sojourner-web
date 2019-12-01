<template>
  <v-list-tile class="event" :to="`/event/${event.id}`"> 
    <v-list-tile-content v-ripple>
      <v-list-tile-sub-title>
        <span v-if="showDay">
          {{ event.day.name }}
        </span>
        <span>
          {{ event.startTime }}-{{ event.endTime }}
        </span>
        <span v-if="showRoom">
          | {{ event.room.name }}
          <room-state :room="event.room"></room-state>
        </span>
        <span v-if="!showRoom && event.persons.length > 0">| {{ event.persons.join(', ') }}</span>
      </v-list-tile-sub-title>
      <v-list-tile-title class="event-title">
        {{ event.title }}
        <span v-if="event.language" class="font-weight-light">
          ({{ event.language }})
        </span>
      </v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action @click.prevent="">
      <favourite :event="event"></favourite>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import Favourite from './Favourite'
import RoomState from './RoomState'

export default {
  name: 'event',

  props: {
    event: Object,
    showRoom: Boolean,
    showDay: Boolean
  },

  components: {
    Favourite,
    RoomState
  }
}
</script>

<style scoped>
.event .v-list__tile__title {
  white-space: normal;
  height: auto;
  max-height: 48px;
}

.event .v-list__tile__sub-title {
  color: var(--v-secondary-base) !important;
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline;
}
</style>
