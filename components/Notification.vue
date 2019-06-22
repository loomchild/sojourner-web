<template>
  <v-snackbar :value="notification.message" @change="hide" :timeout="notification.timeout" color="primary" bottom multi-line>
    {{ notification.message }}
    <v-spacer></v-spacer>
    <v-btn v-if="notification.button" flat small @click.native="button()">{{ notification.button.title }}</v-btn>
    <v-btn flat small icon @click.native="hide()"><v-icon>close</v-icon></v-btn>
  </v-snackbar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'notification',

  data: () => ({
    notification: {}
  }),

  computed: {
    ...mapGetters([
      'notifications'
    ])
  },

  watch: {
    notifications () {
      this.notification = this.notifications[0] || {}
    }
  },

  methods: {
    hide () {
      this.notification = {}
      setTimeout(() => this.hideNotification(), 600)
    },

    button () {
      const handler = this.notification.button.handler
      this.hide()
      handler()
    },

    ...mapActions([
      'hideNotification'
    ])
  }
}
</script>

<style>
.v-snack button {
  margin-left: 10px !important;
}
</style>
