<template>
  <v-app id="app" dark>
    <main-menu :drawer="drawer"></main-menu>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Sojourner</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-tooltip right>
            <v-btn icon large :href="source" target="_blank" slot="activator">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017 by <a href="http://loomchild.net" target="_blank">loomchild</a></span>
    </v-footer>
</v-app></template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'app',
  components: {
    'main-menu': MainMenu
  },
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>

<style>
</style>
