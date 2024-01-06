<template>
  <v-navigation-drawer v-if="$vuetify.breakpoint.smAndDown" app clipped fixed :value="drawer" width="250" height="480" @input="setDrawer">
    <v-list dark class="pa-0">
      <menu-item title="Programme" icon="mdi-home" :to="{ name: 'dashboard', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item v-if="hasLive" title="Live" icon="mdi-television-classic" :to="{ name: 'live-events', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item title="Bookmarks" icon="mdi-bookmark-multiple" :to="{ name: 'favourite-events', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item v-if="hasAll" title="All" icon="mdi-view-headline" :to="{ name: 'all', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item v-if="hasMap" title="Map" icon="mdi-map" :to="{ name: 'campus-map', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item title="Search" icon="mdi-magnify" :to="{ name: 'search-events', params: { editionId: conferenceEdition.id } }"></menu-item>
      <v-divider class="mx-4"></v-divider>
      <menu-item v-if="!realUser" title="Log-in" icon="mdi-account-outline" @click="showLoginDialog(); setDrawer(false);"></menu-item>
      <menu-item v-if="realUser" title="Log-out" icon="mdi-account" @click="clickLogOut"></menu-item>
      <menu-item title="About" icon="mdi-information" :to="{ name: 'about' }"></menu-item>
    </v-list>
    <img class="menu-logo" src="~assets/menu-logo.png">
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import MenuItem from './MenuItem'

export default {
  name: 'MainMenu',

  components: {
    'menu-item': MenuItem
  },

  computed: mapGetters([
    'conferenceEdition',
    'drawer',
    'realUser',
    'hasMap',
    'hasAll',
    'hasLive'
  ]),

  methods: {
    async clickLogOut () {
      try {
        await this.logOut()
        this.showMessage('Logged out successfully')
      } catch (error) {
        this.showError(error.message)
      }
    },

    ...mapActions([
      'setDrawer',
      'showLoginDialog',
      'logOut',
      'showError',
      'showMessage'
    ])
  }
}
</script>

<style scroped>
.v-navigation-drawer {
  border-radius: 0 0 100px 0;
  background-color: var(--v-secondary-base) !important;
}

.v-navigation-drawer .v-list {
  margin-top: 16px;
}

.v-navigation-drawer .v-divider {
  border-color: var(--v-secondary-lighten5) !important;
  border-width: 1px;
}

.menu-logo {
  position: absolute;
  left: 16px;
  bottom: 16px;
  opacity: 0.5;
}
</style>
