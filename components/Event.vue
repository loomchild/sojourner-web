<template>
  <v-list-item v-if="event" :ripple="false" class="event pr-0" :to="{ name: 'event', params: { eventId: event.id } }">
    <v-list-item-content class="align-content-center">
      <v-list-item-subtitle class="infos">
        <span v-if="showDay">
          {{ event.day.name }}
        </span>
        <span>
          {{ event.startTime }}-{{ event.endTime }}
        </span>
        <span v-if="hasRooms && showRoom">
          | {{ event.room.name }}
          <room-state :room="event.room"></room-state>
        </span>
        <span v-if="showTrack">
          | {{ event.track.name }}
        </span>
        <span v-if="showType">
          | {{ event.type.name }}
        </span>
      </v-list-item-subtitle>
      <v-list-item-title class="event-title">
        {{ event.title }}
        <span v-if="event.language" class="font-weight-light">
          ({{ event.language }})
        </span>
      </v-list-item-title>
      <v-list-item-subtitle v-if="showPersons && event.persons.length > 0" class="speakers grey--text">
        {{ event.speakers }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action class="align-self-stretch ma-0 pa-4 d-flex align-center noclickable" @click.prevent.stop>
      <v-list-item-action-text>
        <play :event="event" class="mr-2"></play>
        <favourite :event="event"></favourite>
      </v-list-item-action-text>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex'

import Play from '@/components/Play'

import Favourite from './Favourite'
import RoomState from './RoomState'

export default {
  name: 'Event',

  components: {
    Favourite,
    RoomState,
    Play
  },

  props: {
    event: {
      type: Object,
      required: true
    },
    showRoom: Boolean,
    showTrack: Boolean,
    showDay: Boolean,
    showType: Boolean,
    showPersons: Boolean
  },

  computed: {
    ...mapGetters([
      'hasRooms'
    ])
  }
}
</script>

<style scoped>
.event .v-list-item__title {
  white-space: normal;
  height: auto;
}

.event .infos,
.event .speakers {
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline !important;
}

.event .infos {
  color: var(--v-secondary-base) !important;
  margin-top: 2px;
}

.event .v-list-item__content > :not(:last-child) {
  margin-bottom: 4px;
}
</style>
