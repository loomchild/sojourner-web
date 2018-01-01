<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Sojourner</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'main-toolbar',
  methods: mapActions([
    'toggleDrawer'
  ])
}
</script>

<style>
</style>


