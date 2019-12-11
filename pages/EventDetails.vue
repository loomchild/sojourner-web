<template>
  <v-container v-if="$vuetify.breakpoint.smAndDown" fluid fill-height class="content">
    <v-layout justify-center align-top>
      <v-card>
        <div class="image" :style="{'--image': `url(${background})`}"></div>
        <v-card-title primary-title class="d-block pb-0">
          <div class="event-info">
            {{ event.day.name }} {{ event.startTime }}-{{ event.endTime }}
            |
            <span v-if="hasMap"><router-link :to="`/building/${event.room.building.name}`">{{ event.room.name }}</router-link></span>
            <span v-else>{{ event.room.name }}</span>
            <room-state :room="event.room"></room-state>
          </div>
          <h2>{{ event.title }}</h2>
          <h3>{{ event.subtitle }}</h3>
          <div class="speakers grey--text">
            {{ event.speakers() }}
          </div>
        </v-card-title>
        <v-card-text class="pb-0">
          <div>
            <favourite :event="event" large></favourite>
          </div>
          <div v-if="event.abstract" v-html="event.abstract" class="abstract"></div>
          <div v-if="event.description" v-html="event.description" class="description"></div>
          <div v-if="event.links.length > 0" class="links pt-0 pb-3">
            Links:
            <p v-for="link in event.links" class="link mb-0"><a :href="link.href">{{ link.title }}</a></p>
          </div>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
  <v-container v-else fluid class="content">
    <page-title :back-arrow="typeColor"></page-title>
    <v-layout row>
      <v-flex xs4>
        <div class="favourite">
          <favourite :event="event" large></favourite>
        </div>
        <div class="mt-2">
          <div class="image-background"></div>
          <div class="image-shadow"></div>
          <div class="image" :style="{'--image': `url(${background})`}"></div>
        </div>
      </v-flex>
      <v-flex xs8 class="pl-5 pr-3">
        <div class="speakers grey--text">
          {{ event.speakers() }}
        </div>
        <h2 class="event-title">{{ event.title }}</h2>
        <h3 class="title mt-1">{{ event.subtitle }}</h3>
        <div class="event-info my-4">
          {{ event.day.name }} {{ event.startTime }}-{{ event.endTime }}
          |
          <span v-if="hasMap"><router-link :to="`/building/${event.room.building.name}`">{{ event.room.name }}</router-link></span>
          <span v-else>{{ event.room.name }}</span>
          <room-state :room="event.room"></room-state>
        </div>
        <div v-if="event.abstract" v-html="event.abstract" class="abstract"></div>
        <div v-if="event.description" v-html="event.description" class="description"></div>
        <div v-if="event.links.length > 0" class="links pt-0 pb-3">
          Links:
          <p v-for="link in event.links" class="link mb-0"><a :href="link.href">{{ link.title }}</a></p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from '@/logic/Event'
import Favourite from '@/components/Favourite'
import RoomState from '@/components/RoomState'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'event-details',

  components: {
    Favourite,
    RoomState,
    PageTitle
  },

  props: [
    'eventId'
  ],

  computed: {
    event () {
      return this.events[this.eventId] || new Event()
    },

    background () {
      return this.event ? require(`confassets/${this.event.type.background}`) : ''
    },

    typeColor () {
      const type = this.event.type
      return type ? type.arrowColor : 'secondary'
    },

    ...mapGetters([
      'events',
      'hasMap'
    ])
  },

  metaInfo () {
    return {
      title: this.event.track.name || this.event.type.name,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.event.abstract ? this.event.abstract.replace(/<[^>]+>/g, '') : this.event.title
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
  background: var(--image), #f4d9d0;
  background-size: 100% auto, auto;
  height: calc(22vh + 80px);
  margin-bottom: -80px;
  width: 100%;
}

.v-card__title--primary {
  border-radius: 0 80px 0 0 !important;
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

.event-info, .event-info a {
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

.v-card__text .favourite {
  position: absolute;
  right: 24px;
  transform: translateY(-36px);
}

.links {
  counter-reset: link-counter;
}

.link a {
  color: var(--v-secondary-base);
}

.link:before {
  content: '['counter(link-counter)'] ';
  counter-increment: link-counter;
}

@media only screen and (min-width:960px) {
  .speakers {
    font-size: 18px;
  }

  .event-title {
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
  }

  .event-info {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 0;
  }

  .favourite {
    text-align: right;
  }

  .image-background {
    position: absolute;
    background-color: #F2F2F288;
    width: 270px;
    height: 270px;
  }

  .image-shadow {
    position: absolute;
    background-color: #EDBAA788;
    width: 270px;
    height: 270px;
    transform: translateX(30px) translateY(30px);
  }

  .image {
    position: absolute;
    background: var(--image);
    background-size: cover;
    width: 270px;
    height: 270px;
  }
}
</style>
