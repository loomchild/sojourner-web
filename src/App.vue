<template>
  <v-app id="app" dark>
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <keep-alive :include="alive">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-content>
    <notification></notification>
  </v-app>
</template>

<script>
import Vue from 'vue'
import {mapActions} from 'vuex'

import MainMenu from './components/MainMenu'
import MainToolbar from './components/MainToolbar'
import Notification from './components/Notification'

const ALIVE_COMPONENTS = ['all-events', 'conference-tracks', 'rooms']

export default {
  name: 'app',

  components: {
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar,
    'notification': Notification
  },

  data: () => ({
    alive: ALIVE_COMPONENTS
  }),

  methods: mapActions([
    'initFavourites'
  ]),

  created: function () {
    this.initFavourites()

    this.$eventBus.$on('refreshSchedule', () => {
      this.alive = []
      Vue.nextTick().then(() => { this.alive = ALIVE_COMPONENTS })
    })
  }
}
</script>

<style>
</style>
