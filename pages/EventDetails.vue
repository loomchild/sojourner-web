<template>
  <v-container v-if="event && $vuetify.breakpoint.smAndDown" fluid class="content fill-height">
    <v-row class="align-top" justify="center">
      <v-card>
        <v-img id="event-video" :src="background" :aspect-ratio="16/9" class="image d-flex" @click="playEvent">
          <v-icon v-if="canPlayEvent" color="white" x-large>
            play_arrow
          </v-icon>
        </v-img>
        <v-card-title primary-title class="d-block pb-0">
          <div class="event-info">
            {{ event.day.name }} {{ event.startTime }}-{{ event.endTime }}
            <span v-if="hasRooms">
              |
              <span v-if="hasMap && event.room.building">| <router-link :to="`/building/${event.room.building.name}`">{{ event.room.name }}</router-link></span>
              <span v-else>{{ event.room.name }}</span>
              <room-state :room="event.room"></room-state>
            </span>
          </div>
          <h2>{{ event.title }}</h2>
          <h3>{{ event.subtitle }}</h3>
          <div class="speakers grey--text">
            {{ event.speakers() }}
          </div>
        </v-card-title>
        <v-card-text class="pb-0">
          <div class="icons">
            <chat :event="event" class="mr-2"></chat>
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
    </v-row>
  </v-container>
  <v-container v-else-if="event" fluid class="content">
    <page-title :back-arrow="typeColor"></page-title>
    <v-row>
      <v-col cols="4">
        <div class="icons">
          <chat :event="event" class="mr-2"></chat>
          <favourite :event="event" large></favourite>
        </div>
        <div class="mt-2 image-wrapper">
          <div class="image-background"></div>
          <div class="image-shadow"></div>
          <v-img id="event-video" :src="background" :aspect-ratio="16/9" class=" image d-flex" :class="{ clickable: canPlayEvent }" @click="playEvent">
            <v-icon v-if="canPlayEvent" color="white" x-large>
              play_arrow
            </v-icon>
          </v-img>
        </div>
      </v-col>
      <v-col cols="8" class="pl-5 pr-3">
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
          <span v-if="hasRooms">
            |
            <span v-if="hasMap"><router-link :to="`/building/${event.room.building.name}`">{{ event.room.name }}</router-link></span>
            <span v-else>{{ event.room.name }}</span>
            <room-state :room="event.room"></room-state>
          </span>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Favourite from '@/components/Favourite'
import RoomState from '@/components/RoomState'
import PageTitle from '@/components/PageTitle'
import Chat from '@/components/Chat'

export default {
  name: 'EventDetails',

  components: {
    Favourite,
    RoomState,
    PageTitle,
    Chat
  },

  props: {
    eventId: {
      type: String,
      required: true
    }
  },

  computed: {
    event () {
      return this.events[this.eventId]
    },

    typeColor () {
      const type = this.event.type
      return type ? type.arrowColor : 'secondary'
    },

    canPlayEvent () {
      return this.event.videos.length > 0
    },

    background () {
      if (!this.event) {
        return ''
      }
      if (this.event.videos.length > 0) {
        return require('confassets/video.jpg')
      }
      return require(`confassets/${this.event.type.background}`)
    },

    ...mapGetters([
      'events',
      'hasMap',
      'hasRooms'
    ])
  },

  activated () {
    this.$nextTick(() => this.dockPlayer(this.eventId))
  },

  updated () {
    this.$nextTick(() => this.dockPlayer(this.eventId))
  },

  deactivated () {
    this.dockPlayer(null)
  },

  methods: {
    playEvent () {
      if (this.canPlayEvent) {
        this.play(this.event)
      }
    },

    ...mapActions([
      'play',
      'dockPlayer'
    ])
  },

  metaInfo () {
    if (!this.event) {
      return {}
    }

    return {
      title: this.event.title || '',
      pageTitle: this.event.track.name || this.event.type.name,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.event.abstract ? this.event.abstract.replace(/<[^>]+>/g, '') : ''
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

.pl-6 {
  margin-left: 64px !important;
}

.v-card {
  background-color: var(--v-primary-lighten3) !important;
  width: 100%;
}

.image {
  align-items: center;
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

.v-card__text .icons {
  position: absolute;
  right: 24px;
  transform: translateY(-44px);
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

  .icons {
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
