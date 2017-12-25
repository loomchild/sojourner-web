<template>
  <v-app id="app" dark>
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <keep-alive include="all-events,conference-tracks,rooms">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu'
import MainToolbar from './components/MainToolbar'

export default {
  name: 'app',

  components: {
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar
  }
}
</script>

<style>
</style>
