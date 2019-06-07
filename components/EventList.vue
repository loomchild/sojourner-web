<template>
  <div>
    <v-tabs class="days" color="primary" slider-color="none" :value="initialDay" dark>
      <template v-for="dayEvents in allDayEvents">
        <v-tab ripple :disabled="dayEvents.events.length === 0">
          {{ dayEvents.day.name }}
        </v-tab>
        <v-tab-item>
          <v-list three-line>
            <template v-for="(event, index) in dayEvents.events">
              <event :event="event"></event>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-tab-item>
      </template>
    </v-tabs>
    <v-list three-line>
      <template v-for="(event, index) in events">
      </template>
    </v-list>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Event from '@/components/Event'

export default {
  name: 'events',

  components: {
    'event': Event
  },

  props: [
    'events'
  ],

  computed: {
    initialDay () {
      return this.allDayEvents.findIndex(dayEvents => dayEvents.events.length > 0)
    },

    allDayEvents () {
      return this.allDays.map(day => ({
        day,
        events: this.events.filter(event => event.day.index === day.index)
      }))
    },

    ...mapGetters([
      'allDays'
    ])
  }
}
</script>

<style>
</style>
