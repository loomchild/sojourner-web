<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Sojourner</v-toolbar-title>
    <v-spacer></v-spacer>
    <account-badge></account-badge>
  </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'
import AccountBadge from './AccountBadge'

export default {
  name: 'main-toolbar',
  components: {
    AccountBadge
  },
  methods: mapActions([
    'toggleDrawer'
  ])
}
</script>

<style>
</style>


