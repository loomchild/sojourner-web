<template>
  <v-app id="app" dark>
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content v-if="scheduleInitialized">
      <keep-alive include="all-events,favourite-events,conference-tracks,rooms">
        <router-view></router-view>
      </keep-alive>
    </v-content>
    <v-content v-else>
      <v-container fluid fill-height>
        <div class="center">
          <div class="spinner"></div>
        </div>
      </v-container>
    </v-content>
    <notification></notification>
    <analytics></analytics>
  </v-app>
</template>

<script>
import Vue from 'vue'

import {mapActions, mapGetters} from 'vuex'

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
    'initIndexedDB',
    'migrateLegacyFavourites',
    'initPersistent',
    'initSchedule',
    'initUser',
    'initRoomStateUpdater',
    'initNotification'
  ]),

  created: async function () {
    try {
      await this.initIndexedDB()
      await this.migrateLegacyFavourites()
      await this.initPersistent()
    } catch (error) {
      console.error(error)
    }
  },

  mounted () {
    // This is not good enough, replace with lambda
    Vue.nextTick(() => {
      this.initSchedule()
      this.initUser()
      this.initRoomStateUpdater()
      this.initNotification(this.$route.query.notification)
    })
  },

  computed: {
    ...mapGetters([
      'scheduleInitialized'
    ])
  }
}
</script>

<style src="@/assets/spinner.css"></style>

<style>
.center {
  margin: auto;
}
</style>
