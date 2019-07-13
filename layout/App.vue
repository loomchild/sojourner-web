<template>
  <v-app id="app" :class="{root: isRoot}">
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content v-if="scheduleInitialized">
      <keep-alive>
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
    'analytics': Analytics,
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar,
    'bottom-menu': BottomMenu,
    'notification': Notification,
    'login-dialog': LoginDialog
  },

  methods: mapActions([
    'initIndexedDB',
    'migrateLegacyFavourites',
    'initPersistent',
    'initSchedule',
    'initUser',
    'initRoomStateUpdater',
    'initA2HSTip',
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
      this.initA2HSTip()
    })
  },

  computed: {
    isRoot () {
      return this.$route.path === '/'
    },

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
html {
  overflow-y: auto;
}

@media only screen and (max-width:599px) {
  .v-snack--bottom {
    margin-bottom: 56px;
  }
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

.container {
  padding: 0;
}

.v-divider.day {
  border-width: 12px;
  border-color: #fafafa;
}

.application--wrap {
  min-height: var(--screenHeight, 100vh) !important;
}

.root .application--wrap {
  background-image: url(~assets/dashboard.jpg);
  background-size: cover;
  background-position: center;
}

@media only screen and (min-width:600px) {
  .root .application--wrap {
    background-color: var(--v-primary-base) !important;
    background-image: url(~assets/dashboard-desktop.png);
    background-size: 33%;
    background-position: right bottom;
  }
}

.v-list__tile__action {
  cursor: default;
}

.v-tabs.days .v-tabs__div {
  min-width: 140px;
}

.v-tabs.days .v-tabs__item {
  border-radius: 20px 20px 0px 0px;
  border-color: var(--v-secondary-base);
  border-width: 1px;
  border-style: solid;
  padding-left: 30px;
  padding-right: 30px;
  opacity: 1;
}

.v-tabs.days .v-tabs__item--active {
  background-color: var(--v-secondary-base);
}

/* Sometimes window height stays 0px (Vuetify bug?), forcing undefined height */
.v-tabs.days .v-window__container--is-active {
  height: unset !important;
}
</style>
