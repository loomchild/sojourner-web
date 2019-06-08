<template>
  <div>
    <v-tabs class="days" color="primary" slider-color="none" v-model="day" dark>
      <template v-for="dayEvents in allDayEvents">
        <v-tab ripple :disabled="dayEvents.events.length === 0">
          {{ dayEvents.day.name }}
        </v-tab>
        <v-tab-item :transition="transition" :reverseTransition="transition">
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

  data: () => ({
    day: 0,
    transition: undefined
  }),

  computed: {
    allDayEvents () {
      return this.allDays.map(day => ({
        day,
        events: this.events.filter(event => event.day.index === day.index)
      }))
    },

    todayEvents () {
      const dayEvents = this.allDayEvents[this.day]
      return (dayEvents && dayEvents.events) ? dayEvents.events : []
    },

    ...mapGetters([
      'allDays'
    ])
  },

  activated () {
    if (this.todayEvents.length === 0) {
      this.transition = 'none'
      this.day = this.allDayEvents.findIndex(dayEvents => dayEvents.events.length > 0)
      setTimeout(() => {
        this.transition = undefined
      }, 200)
    }
  }
}
</script>

<style>
</style>
