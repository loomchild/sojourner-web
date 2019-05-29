<template>
  <v-toolbar app fixed flat clipped-left color="primary">
    <v-toolbar-side-icon v-if="$route.path === '/'" @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-btn v-if="$route.path !== '/'" @click.stop="goBack" flat icon dark>
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <account-badge></account-badge>
  </v-toolbar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import AccountBadge from './AccountBadge'

export default {
  name: 'main-toolbar',
  components: {
    AccountBadge
  },
  computed: {
    ...mapGetters([
      'title'
    ])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },

    ...mapActions([
      'toggleDrawer'
    ])
  }
}
</script>

<style>
</style>
