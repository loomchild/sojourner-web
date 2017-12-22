<template>
  <v-navigation-drawer clipped fixed v-model="drawer" app>
    <v-list dense>
      <menu-item title="All Events" icon="home" to="/"></menu-item>
      <menu-item title="Favourite events" icon="favorite" to="/favourites"></menu-item>
      <v-divider></v-divider>
      <menu-item title="Settings" icon="settings" to="/settings"></menu-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'main-menu',

  components: {
    'menu-item': MenuItem
  },

  data: () => ({
    drawer: null
  }),

  created: function () {
    this.$eventBus.$on('toggledrawer', () => {
      this.drawer = !this.drawer
    })
  }
}
</script>

<style>
</style>

