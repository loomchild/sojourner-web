<template>
  <v-navigation-drawer app clipped fixed :value="drawer" @input="setDrawer" mobile-break-point="960" width="250" height="400">
    <v-list dense :dark="$vuetify.breakpoint.smAndDown">
      <menu-item title="Tracks" icon="toc" to="/tracks/"></menu-item>
      <menu-item title="Rooms" icon="weekend" to="/rooms/"></menu-item>
      <menu-item title="Search" icon="search" to="/search/"></menu-item>
      <menu-item title="Favourites" icon="favorite" to="/favourites/"></menu-item>
      <v-divider></v-divider>
      <menu-item title="Campus Map" icon="map" to="/map/"></menu-item>
      <menu-item title="Settings" icon="settings" to="/settings/"></menu-item>
      <menu-item title="About" icon="info" to="/about/"></menu-item>
    </v-list>
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
    'drawer'
  ]),

  methods: mapActions([
    'setDrawer'
  ])
}
</script>

<style>
@media only screen and (max-width:959px) {
  .v-navigation-drawer {
    border-radius: 0 0 100px 0;
    background-color: var(--v-secondary-base) !important;
  }
}
</style>

