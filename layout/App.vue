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
    <bottom-menu></bottom-menu>
  </v-app>
</template>

<script>
import Vue from 'vue'

import {mapActions, mapGetters} from 'vuex'

import Analytics from '@/components/Analytics'
import MainMenu from '@/components/MainMenu'
import BottomMenu from '@/components/BottomMenu'
import MainToolbar from '@/components/MainToolbar'
import Notification from '@/components/Notification'

export default {
  name: 'app',

  components: {
    'analytics': Analytics,
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar,
    'bottom-menu': BottomMenu,
    'notification': Notification
  },

  methods: mapActions([
    'initIndexedDB',
    'migrateLegacyFavourites',
    'initPersistent',
    'initSchedule',
    'initUser',
    'initRoomStateUpdater',
    'initNotification',
    'setTitle'
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
  },

  metaInfo () {
    return {
      titleTemplate: chunk => chunk ? `${chunk} | Sojourner` : 'Sojourner',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'FOSDEM conference companion'
      }],
      changed: (newMetaInfo) => {
        const title = newMetaInfo.title
        this.setTitle(title === 'Sojourner' ? '' : title.slice(0, -12))
      }
    }
  }
}
</script>

<style>
@media only screen and (max-width:959px) {
  .v-snack--bottom {
    margin-bottom: 56px;
  }
}

.center {
  margin: auto;
}

.application--wrap {
  min-height: calc(var(--vh, 1vh) * 100) !important;
}
</style>
