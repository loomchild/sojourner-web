<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-btn @click.stop="goBack" flat icon dark>
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ title ? title : 'Sojourner' }}</v-toolbar-title>
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


