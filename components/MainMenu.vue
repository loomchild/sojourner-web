<template>
  <v-navigation-drawer v-if="$vuetify.breakpoint.smAndDown" app clipped fixed :value="drawer" @input="setDrawer" width="250" height="480">
    <v-list dark class="pa-0">
      <menu-item v-if="!realUser" title="Log-in" icon="person_outline" @click="showLoginDialog(); setDrawer(false);"></menu-item>
      <menu-item v-if="realUser" title="Log-out" icon="person" @click="clickLogOut"></menu-item>
      <v-divider class="mx-3"></v-divider>
      <menu-item title="Dashboard" icon="home" to="/"></menu-item>
      <menu-item title="Bookmarks" icon="bookmarks" to="/favourites/"></menu-item>
      <menu-item v-if="hasAll" title="All" icon="view_headline" to="/all/"></menu-item>
      <menu-item v-if="hasMap" title="Map" icon="map" to="/map/"></menu-item>
      <menu-item title="Search" icon="search" to="/search/"></menu-item>
      <v-divider class="mx-3"></v-divider>
      <menu-item title="About" icon="info" to="/about/"></menu-item>
    </v-list>
    <img class="menu-logo" src="~confassets/menu-logo.png">
  </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import MenuItem from './MenuItem'

export default {
  name: 'main-menu',

  components: {
    'menu-item': MenuItem
  },

  computed: mapGetters([
    'drawer',
    'realUser',
    'hasMap',
    'hasAll'
  ]),

  methods: {
    clickLogOut () {
      return this.logOut()
        .then(() => this.showMessage('Logged out successfully'))
        .catch(error => this.showError(error.message))
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
  margin-top: 33px;
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
