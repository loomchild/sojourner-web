<template>
  <v-app id="app" dark>
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <keep-alive include="all-events,conference-tracks,rooms">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-content>
    <notification></notification>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

import MainMenu from './components/MainMenu'
import MainToolbar from './components/MainToolbar'
import Notification from './components/Notification'

export default {
  name: 'app',

  components: {
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar,
    'notification': Notification
  },

  methods: mapActions([
    'initFavourites',
    'parseSchedule'
  ]),

  created: function () {
    this.parseSchedule()
    this.initFavourites()
  }
}
</script>

<style>
</style>
