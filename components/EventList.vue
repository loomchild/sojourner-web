<template>
  <div>
    <day-tabs>
      <template v-for="dayEvents in allDayEvents">
        <v-tab :key="dayEvents.day.name" ripple :disabled="dayEvents.events.length === 0">
          {{ dayEvents.day.name }}
        </v-tab>
        <v-tab-item :key="dayEvents.day.name">
          <event-list-plain :events="dayEvents.events" :show-room="showRoom" :show-track="showTrack" :show-type="showType" :show-persons="showPersons"></event-list-plain>
        </v-tab-item>
      </template>
    </day-tabs>
    <div class="hidden-sm-and-down mb-12"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DayTabs from '@/components/DayTabs'
import EventListPlain from '@/components/EventListPlain'

export default {
  name: 'Events',

  components: {
    DayTabs,
    EventListPlain
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

  created () {
    this.switchTabIfNoEvents()
  },

  activated () {
    this.switchTabIfNoEvents()
  },

  methods: {
    switchTabIfNoEvents () {
      if (!this.allDayEvents[this.tab] || this.allDayEvents[this.tab].events.length === 0) {
        const tab = this.allDayEvents.findIndex(dayEvents => dayEvents && dayEvents.events.length > 0)
        this.setTab(tab !== -1 ? tab : 0)
      }
    },

    ...mapActions([
      'setTab'
    ])
  }
}
</script>

<style scoped>
</style>
