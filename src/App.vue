<template>
  <v-app id="app" dark>
    <main-menu :drawer="drawer"></main-menu>
    <main-toolbar @toggledrawer="drawer = !drawer"></main-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <main-footer></main-footer>
  </v-app>
</template>

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
    drawer: false
  })
}
</script>

<style>
</style>
