<template>
  <v-app :class="[page, layout]">
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content v-if="scheduleInitialized">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
    <v-content v-else>
      <v-container fluid fill-height class="content">
        <div class="center">
          <div class="spinner"></div>
        </div>
      </v-container>
    </v-content>
    <notification></notification>
    <analytics></analytics>
    <login-dialog></login-dialog>
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
import LoginDialog from '@/components/LoginDialog'

export default {
  name: 'app',

  components: {
    Analytics,
    MainMenu,
    MainToolbar,
    BottomMenu,
    Notification,
    LoginDialog
  },

  methods: mapActions([
    'initIndexedDB',
    'initPersistent',
    'initSchedule',
    'initScheduleUpdater',
    'initUser',
    'initRoomStateUpdater',
    'initA2HSTip',
    'setTitle'
  ]),

  created: async function () {
    try {
      await this.initIndexedDB()
      await this.initPersistent()
    } catch (error) {
      console.error(error)
    }
  },

  mounted () {
    // This is not good enough, replace with lambda
    Vue.nextTick(() => {
      this.initSchedule()
      this.initScheduleUpdater()
      this.initUser()
      this.initRoomStateUpdater()
      this.initA2HSTip()
    })
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

  metaInfo () {
    return {
      titleTemplate: chunk => chunk ? `${chunk} | Sojourner` : 'Sojourner',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: `${this.conferenceName} conference companion`
      }],
      changed: (newMetaInfo) => {
        const title = newMetaInfo.title
        this.setTitle(title === 'Sojourner' ? '' : title.slice(0, -12))
      }
    }
  }
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

.application {
  min-height: var(--screenHeight, 100vh) !important;
}

.application {
  background-color: white;
}
</style>

<style>
.v-list__tile__action {
  cursor: default;
}

h1.page-title {
  font-size: 80px;
  line-height: 1em;
  font-family: 'Roboto Condensed', Arial;
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
</style>
