<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-top>
      <v-card>
        <div class="image" :style="{'--image': `url(${background})`}"></div>
        <v-card-title primary-title>
          <div class="event-info">
            {{ event.day.name }} {{ event.start }}-{{ event.end }}
            | <router-link :to="`/building/${event.room.building.name}`">{{ event.room.name }}</router-link>
            <room-state :room="event.room"></room-state>
          </div>
          <h2>{{ event.title }}</h2>
          <h3>{{ event.subtitle }}</h3>
          <div class="speakers grey--text">
            {{ event.persons.join(', ') }}
          </div>
        </v-card-title>
        <v-card-text>
          <div>
            <favourite :event="event" large></favourite>
          </div>
          <div v-if="event.abstract" v-html="event.abstract" class="abstract"></div>
          <div v-if="event.description" v-html="event.description" class="description"></div>
          <div v-if="event.links.length > 0" class="links">
            Links:
            <p v-for="link in event.links" class="link"><a :href="link.href">{{ link.title }}</a></p>
          </div>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from '@/logic/Event'
import Favourite from '@/components/Favourite'
import RoomState from '@/components/RoomState'

export default {
  name: 'event-details',

  components: {
    Favourite,
    RoomState
  },

  props: [
    'eventId'
  ],

  computed: {
    event () {
      return this.events[this.eventId] || new Event()
    },

    background () {
      return this.event ? require(`@/assets/${this.event.type.background}`) : ''
    },

    ...mapGetters([
      'events'
    ])
  },

  metaInfo () {
    return {
      title: this.event.track.name,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.event.abstract.replace(/<[^>]+>/g, '')
      }]
    }
  }
}
</script>

<style scoped>
.v-card {
  background-color: var(--v-primary-lighten3) !important;
  width: 100%;
}

.v-card .image {
  background: linear-gradient(#EDBAA788, #EDBAA788), var(--image);
  background-size: auto, 100% auto;
  height: calc(22vh + 80px);
  margin-bottom: -80px;
  width: 100%;
}

.v-card__title--primary {
  border-radius: 0 80px 0 0 !important;
  display: block;
}

.v-card__title--primary div, .v-card__title--primary h3 {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
}

.v-card__title--primary h2 {
  font-weight: inherit;
  font-size: 16px;
  line-height: 24px;
}

.v-card__title--primary div.event-info, .v-card__title--primary div.event-info a {
  color: var(--v-secondary-base);
  padding-bottom: 4px;
  text-decoration: none;
}

.v-card__title--primary div.speakers {
  padding-top: 11px;
  padding-bottom: 16px;
}

.v-card__title {
  background-color: white;
}

.v-card__title, .v-card__text {
  padding-bottom: 0;
}

.v-card__text .favourite {
  position: absolute;
  right: 24px;
  transform: translateY(-36px);
}

.links {
  padding-top: 0;
  padding-bottom: 16px;
  counter-reset: link-counter;
}

.link {
  margin-bottom: 0;
}

.link a {
  color: var(--v-secondary-base);
}

.link:before {
  content: '['counter(link-counter)'] ';
  counter-increment: link-counter;
}
</style>


