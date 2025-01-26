<template>
  <v-app :class="[page, layout]">
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-main v-if="scheduleInitialized">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
    <v-main v-else>
      <v-container fluid class="content fill-height">
        <div class="center">
          <div class="spinner"></div>
        </div>
      </v-container>
    </v-main>
    <notification></notification>
    <analytics></analytics>
    <login-dialog></login-dialog>
    <player></player>
    <bottom-menu></bottom-menu>
  </v-app>
</template>

<script>
import Vue from 'vue'

import { mapActions, mapGetters } from 'vuex'

import Analytics from '@/components/Analytics'
import MainMenu from '@/components/MainMenu'
import BottomMenu from '@/components/BottomMenu'
import MainToolbar from '@/components/MainToolbar'
import Notification from '@/components/Notification'
import LoginDialog from '@/components/LoginDialog'
import Player from '@/components/Player'

export default {
  name: 'App',

  components: {
    Analytics,
    MainMenu,
    MainToolbar,
    BottomMenu,
    Notification,
    LoginDialog,
    Player
  },

  computed: {
    page () {
      return this.$route.name
    },

    layout () {
      return 'layout-' + (this.$route.meta.layout || 'default')
    },

    ...mapGetters([
      'scheduleInitialized',
      'conferenceName'
    ])
  },

  created: async function () {
    try {
      this.initConference(this.$route.params.editionId)
      await this.initHistory()
      await this.initPersistent()
    } catch (error) {
      console.error(error)
    }
  },

  mounted () {
    Vue.nextTick(() => {
      this.initSchedule()
      this.initScheduleUpdater()
      this.initScheduleBuster()
      this.initUser()
      this.initMeta()
      this.initRoomStateUpdater()
      this.initA2HSTip()
      this.initCron()
    })
  },

  metaInfo () {
    return {
      titleTemplate: chunk => chunk ? `${chunk} | Sojourner` : 'Sojourner',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: `Sojourner - ${this.conferenceName} conference companion.`
      }],
      changed: (newMetaInfo) => {
        const title = newMetaInfo.title
        this.setTitle(title === 'Sojourner' ? '' : title.slice(0, -12))
        const pageTitle = newMetaInfo.pageTitle
        this.setPageTitle(pageTitle)
      }
    }
  },

  methods: mapActions([
    'initConference',
    'initPersistent',
    'initSchedule',
    'initScheduleUpdater',
    'initScheduleBuster',
    'initUser',
    'initMeta',
    'initRoomStateUpdater',
    'initA2HSTip',
    'initCron',
    'setTitle',
    'setPageTitle',
    'initHistory'
  ])
}
</script>

<style scoped>
html {
  overflow-y: auto;
}

.center {
  margin: auto;
  width: 150px;
  height: 150px;
}

@media screen and (display-mode: standalone) {
  .center .spinner {
    animation: scale-in 300ms ease-in both;
  }
}

.v-application {
  background-color: white;
  font-family: Rubik, sans-serif;
}
</style>

<style>
.v-list__tile__action {
  cursor: default;
}

.v-btn {
  letter-spacing: inherit;
  text-indent: inherit;
}

a:focus-visible, button:focus-visible, .v-btn:focus-visible {
  outline: 2px solid var(--v-secondary-base);
}

h1.page-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 80px;
  line-height: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--v-secondary-base);
}

.container.content {
  padding: 0;
}

@media only screen and (min-width:960px) {
  .container.content {
    max-width: 960px;
  }
}

.v-application--wrap {
  min-height: 100vh !important;
  min-height: 100dvh !important;
}

.clickable {
  cursor: pointer;
}

.noclickable {
  cursor: default !important;
}

.nowrap {
  white-space: nowrap;
}
</style>
