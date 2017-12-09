<template>
  <v-app id="app" dark>
    <main-menu :drawer="drawer"></main-menu>
    <main-toolbar @toggledrawer="drawer = !drawer"></main-toolbar>
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
    <main-footer></main-footer>
</v-app></template>

<script>
import MainFooter from './components/MainFooter'
import MainMenu from './components/MainMenu'
import MainToolbar from './components/MainToolbar'

export default {
  name: 'app',
  components: {
    'main-footer': MainFooter,
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar
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
