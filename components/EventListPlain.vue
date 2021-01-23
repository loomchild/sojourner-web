<template>
  <div>
    <v-list v-if="events.length > 0" three-line class="pa-0">
      <template v-for="(event, index) in events">
        <event :key="event.id" :event="event" :show-room="showRoom" :show-track="showTrack" :show-type="showType" :show-persons="showPersons"></event>
        <v-divider v-if="index + 1 < events.length" :key="`div-${event.id}`"></v-divider>
      </template>
    </v-list>
    <v-list v-else>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-sub-title>
            There are no events on this list.
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import Event from '@/components/Event'

export default {
  name: 'Events',

  components: {
    Event
  },

  props: {
    events: {
      type: Array,
      default: () => []
    },
    showRoom: Boolean,
    showTrack: Boolean,
    showType: Boolean,
    showPersons: Boolean
  }
}
</script>

<style scoped>
.v-list {
  border: 1px solid #0000001e;
}
</style>
