<template>
  <v-container v-if="person && $vuetify.breakpoint.smAndDown" fluid class="content">
    <v-row class="align-self-start ma-0" justify="center">
      <v-col class="pa-0">
        <v-card>
          <v-card-title class="d-block pt-6 pb-0">
            <h2>{{ person.name }}</h2>
          </v-card-title>
          <v-card-text class="pt-4 pb-0">
            <div v-if="person.bio" class="bio" v-html="person.bio"></div>
          </v-card-text>
        </v-card>
        <event-list-plain :events="person.events" show-day show-room show-track class="pt-2"></event-list-plain>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else-if="person" fluid class="content">
    <page-title back-arrow="secondary"></page-title>
    <v-row class="flex-nowrap">
      <v-col class="pl-4 pr-4">
        <div v-if="person.bio" class="bio" v-html="person.bio"></div>
      </v-col>
    </v-row>
    <event-list-plain :events="person.events" show-day show-room show-track class="pt-4"></event-list-plain>
    <v-row>
      <v-col>
        <div class="pt-0 pb-12"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle'
import EventListPlain from '@/components/EventListPlain'

export default {
  name: 'PersonDetails',

  components: {
    PageTitle,
    EventListPlain
  },

  props: {
    personId: {
      type: String,
      required: true
    }
  },

  computed: {
    person () {
      return this.persons[this.personId]
    },

    ...mapGetters([
      'persons'
    ])
  },

  metaInfo () {
    if (!this.person) {
      return {}
    }

    return {
      title: this.person.name || '',
      pageTitle: this.person.name || '',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.person.bio ? this.person.bio.replace(/<[^>]+>/g, '') : ''
      }]
    }
  }
}
</script>

<style scoped>
.container .v-sheet.v-card {
  box-shadow: none;
  border: none;
}
</style>
