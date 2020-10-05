<template>
  <v-container v-if="event && $vuetify.breakpoint.smAndDown" fluid fill-height class="content">
    <v-layout justify-center align-top>
      <v-card>
        <v-img :key="event.id" :src="event.videos.length === 0 ? background : undefined" :aspect-ratio="16/9" class="image">
          <video v-if="event.videos.length > 0" controls poster="~confassets/video.jpg" preload="none" class="d-block video">
            <source v-for="video in event.videos" :key="video.url" :src="video.url" :type="video.type">
          </video>
        </v-img>
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
          <div v-if="event.abstract" class="abstract" v-html="event.abstract"></div>
          <div v-if="event.description" class="description mt-3" v-html="event.description"></div>
          <div v-if="event.links.length > 0" class="links mt-3">
            Links:
            <p v-for="link in event.links" :key="link.href" class="link mb-0">
              <a :href="link.href">{{ link.title }}</a>
            </p>
          </div>
          <div class="pt-0 pb-3"></div>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
  <v-container v-else-if="event" fluid class="content">
    <page-title :back-arrow="typeColor"></page-title>
    <v-layout row>
      <v-flex xs4>
        <div class="favourite">
          <favourite :event="event" large></favourite>
        </div>
        <div class="mt-2 image-wrapper">
          <div class="image-background"></div>
          <div class="image-shadow"></div>
          <v-img :key="event.id" :src="event.videos.length === 0 ? background : undefined" :aspect-ratio="16/9">
            <video v-if="event.videos.length > 0" controls poster="~confassets/video.jpg" preload="none" class="d-block video">
              <source v-for="video in event.videos" :key="video.url" :src="video.url" :type="video.type">
            </video>
          </v-img>
        </div>
      </v-flex>
      <v-flex xs8 class="pl-6 pr-3">
        <div class="speakers grey--text">
          {{ event.speakers() }}
        </div>
        <h2 class="event-title">
          {{ event.title }}
        </h2>
        <h3 class="title mt-1">
          {{ event.subtitle }}
        </h3>
        <div class="event-info my-4">
          {{ event.day.name }} {{ event.startTime }}-{{ event.endTime }}
          |
          <span v-if="hasMap"><router-link :to="`/building/${event.room.building.name}`">{{ event.room.name }}</router-link></span>
          <span v-else>{{ event.room.name }}</span>
          <room-state :room="event.room"></room-state>
        </div>
        <div v-if="event.abstract" class="abstract" v-html="event.abstract"></div>
        <div v-if="event.description" class="description mt-3" v-html="event.description"></div>
        <div v-if="event.links.length > 0" class="links mt-3">
          Links:
          <p v-for="link in event.links" :key="link.href" class="link mb-0">
            <a :href="link.href">{{ link.title }}</a>
          </p>
        </div>
        <div class="pt-0 pb-5"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import Event from '@/logic/Event'
import Favourite from '@/components/Favourite'
import RoomState from '@/components/RoomState'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'EventDetails',

  components: {
    Favourite,
    RoomState,
    PageTitle
  },

  props: {
    eventId: {
      type: String,
      required: true
    }
  },

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
.image-wrapper {
  position: relative;
  width: 320px;
  height: 180px;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.pl-6 {
  margin-left: 64px !important;
}

.v-card {
  background-color: var(--v-primary-lighten3) !important;
  width: 100%;
}

.v-card .image {
  background: #f4d9d0;
  background-size: 100% auto, auto;
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

.description /deep/ p, .abstract /deep/ p {
  margin-bottom: 0;
}

.description /deep/ p:not(:first-child), .abstract /deep/ p:not(:first-child) {
  margin-top: 16px;
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
    width: 100%;
    height: 100%;
  }

  .image-shadow {
    position: absolute;
    background-color: #EDBAA788;
    width: 100%;
    height: 100%;
    transform: translateX(30px) translateY(30px);
  }
}
</style>
