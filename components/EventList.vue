<template>
  <div>
    <v-list three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider v-if="index + 1 < events.length" :class="{'day': events[index].day.index < events[index + 1].day.index}"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import Event from '@/components/Event'

export default {
  name: 'events',

  components: {
    'event': Event
  },

  props: [
    'events'
  ]
}
</script>

<style>
</style>


