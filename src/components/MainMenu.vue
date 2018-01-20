<template>
  <v-navigation-drawer clipped fixed :value="drawer" @input="setDrawer" app>
    <v-list dense>
      <menu-item title="Tracks" icon="toc" to="/tracks"></menu-item>
      <menu-item title="Rooms" icon="weekend" to="/rooms"></menu-item>
      <menu-item title="All Events" icon="home" to="/all"></menu-item>
      <menu-item title="Favourite Events" icon="favorite" to="/favourites"></menu-item>
      <v-divider></v-divider>
      <menu-item title="Campus Map" icon="map" to="/map"></menu-item>
      <menu-item title="Settings" icon="settings" to="/settings"></menu-item>
      <menu-item title="About" icon="info" to="/about"></menu-item>
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
</style>

