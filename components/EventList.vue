<template>
  <div>
    <v-tabs class="days" color="primary" slider-color="none" :value="tab" @change="setTab" dark>
      <template v-for="dayEvents in allDayEvents">
        <v-tab ripple :disabled="dayEvents.events.length === 0">
          {{ dayEvents.day.name }}
        </v-tab>
        <v-tab-item>
          <v-list three-line class="pa-0">
            <template v-for="(event, index) in dayEvents.events">
              <event :event="event" :show-room="showRoom"></event>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-tab-item>
      </template>
    </v-tabs>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Event from '@/components/Event'

export default {
  name: 'events',

  components: {
    'event': Event
  },

  props: {
    events: Array,
    showRoom: Boolean
  },

  computed: {
    allDayEvents () {
      return this.allDays.map(day => ({
        day,
        events: this.events.filter(event => event.day.index === day.index)
      }))
    },

    ...mapGetters([
      'allDays',
      'tab'
    ])
  },

  methods: {
    ...mapActions([
      'setTab'
    ])
  }
}
</script>

<style scoped>
</style>
