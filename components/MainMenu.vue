<template>
  <v-navigation-drawer v-if="$vuetify.breakpoint.smAndDown" app clipped fixed :value="drawer" @change="setDrawer" width="250" height="480">
    <v-list dark>
      <menu-item v-if="!realUser" title="Log-in" icon="person_outline" @click="showLoginDialog"></menu-item>
      <menu-item v-if="realUser" title="Log-out" icon="person" @click="clickLogOut"></menu-item>
      <v-divider></v-divider>
      <menu-item title="Dashboard" icon="home" to="/"></menu-item>
      <menu-item title="Bookmarks" icon="bookmarks" to="/favourites/"></menu-item>
      <menu-item title="Map" icon="map" to="/map/"></menu-item>
      <menu-item title="Search" icon="search" to="/search/"></menu-item>
      <v-divider></v-divider>
      <menu-item title="About" icon="info" to="/about/"></menu-item>
    </v-list>
    <img class="menu-logo" src="@/assets/menu-logo.png">
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
    'realUser'
  ]),

  methods: {
    clickLogOut () {
      this.logOut()
        .catch(error => this.showError(error.message))
    },

    ...mapActions([
      'setDrawer',
      'showLoginDialog',
      'logOut',
      'showError'
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
  padding: 0;
  margin-top: 33px;
}

.v-navigation-drawer .v-divider {
  margin-left: 16px;
  margin-right: 16px;
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
