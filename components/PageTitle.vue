<template>
  <header class="hidden-sm-and-down">
    <button v-if="backArrow" class="back" :style="{color : buttonColor}" @click.stop="goBack">
      ◂
    </button>
    <h1>
      {{ pageTitle }}
      <div class="float-right">
        <v-btn v-if="eventDetails" text icon replace class="ml-2 mr-0" :disabled="!previousEvent" :to="previousEvent ? { name: 'event', params: { eventId: previousEvent.id } } : null">
          <v-icon color="secondary" style="transform: translateY(2px) rotate(-90deg)">
            mdi-play
          </v-icon>
        </v-btn>
        <v-btn v-if="eventDetails" text icon replace class="ml-0" :disabled="!nextEvent" :to="nextEvent ? { name: 'event', params: { eventId: nextEvent.id } } : null">
          <v-icon color="secondary" style="transform: translateY(-2px) rotate(90deg)">
            mdi-play
          </v-icon>
        </v-btn>
      </div>
    </h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageTitle',

  props: {
    backArrow: {
      type: String,
      default: null
    }
  },

  computed: {
    buttonColor () {
      if (!this.backArrow) {
        return
      }
      if (this.backArrow.startsWith('#')) {
        return this.backArrow
      }
      if (!this.backArrow.includes('-')) {
        return `var(--v-${this.backArrow}-base)`
      }
      return `var(--v-${this.backArrow})`
    },

    eventDetails () {
      if (this.$route.name !== 'event') {
        return null
      }
      const eventId = this.$route.params.eventId
      return this.events[eventId]
    },

    nextEvent () {
      return this.nextTrackEvent(this.eventDetails)
    },

    previousEvent () {
      return this.previousTrackEvent(this.eventDetails)
    },

    ...mapGetters([
      'pageTitle',
      'events',
      'nextTrackEvent',
      'previousTrackEvent'
    ])
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
header {
  margin-top: 120px;
  margin-bottom: 2rem;
}

header, h1 {
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1em;
  font-family: 'Roboto Condensed', sans-serif;
}

h1 {
  color: var(--v-secondary-base);
}

button.back {
  color: var(--v-secondary-base);
  position: relative;
  float: left;
  margin-right: 20px;
  margin-top: -3px;
}

.v-icon {
  font-size: 48px !important;
}

@media only screen and (min-width:1080px) {
  button.back {
    margin-right: 0;
    margin-left: -50px;
  }
}
</style>
