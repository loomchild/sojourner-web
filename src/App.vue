<template>
  <v-app id="app" dark>
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <keep-alive include="all-events,favourite-events,conference-tracks,rooms">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-content>
    <notification></notification>
    <analytics></analytics>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

import Analytics from './components/Analytics'
import MainMenu from './components/MainMenu'
import MainToolbar from './components/MainToolbar'
import Notification from './components/Notification'

export default {
  name: 'app',

  components: {
    'analytics': Analytics,
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar,
    'notification': Notification
  },

  methods: mapActions([
    'parseSchedule',
    'initRoomStateUpdater',
    'initPersistent',
    'initIndexedDB',
    'initUser'
  ]),

  created: async function () {
    try {
      await this.initIndexedDB()
      await this.initPersistent()
      await this.parseSchedule()
      await this.initUser()
      await this.initRoomStateUpdater()
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
</style>
