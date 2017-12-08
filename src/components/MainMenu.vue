<template>
  <v-navigation-drawer clipped fixed v-model="drawer" app>
    <v-list dense>
      <menu-item title="All Events" icon="home" @click="alert('all')"></menu-item>
      <menu-item title="Favourite events" icon="favorite" @click="alert('favorite')"></menu-item>
      <v-divider></v-divider>
      <menu-item title="Settings" icon="settings" @click="alert('settings')"></menu-item>
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
  props: ['drawer']
}
</script>

<style>
</style>

