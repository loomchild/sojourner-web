<template>
  <v-snackbar :value="notification.message" @input="hide" :timeout="notification.timeout" :color="color" bottom multi-line>
    {{ notification.message }}
    <v-spacer></v-spacer>
    <v-btn v-if="notification.button" flat small @click.native="button()">{{ notification.button.title }}</v-btn>
    <v-btn flat small icon @click.native="hide()"><v-icon>close</v-icon></v-btn>
  </v-snackbar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Notification',

  data: () => ({
    notification: {}
  }),

  computed: {
    color () {
      return this.$vuetify.breakpoint.smAndDown ? 'primary' : 'secondary'
    },

    ...mapGetters([
      'notifications'
    ])
  },

  watch: {
    notifications () {
      this.fetchNotification()
    }
  },

  mounted () {
    this.fetchNotification()
  },

  methods: {
    fetchNotification () {
      this.notification = this.notifications[0] || {}
    },

    erase () {
      this.notification = {}
    },

    hide (value) {
      if (!value && this.notification.message) {
        this.erase()
        setTimeout(() => this.hideNotification(), 300)
      }
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

<style scoped>
.v-snack button {
  margin-left: 10px !important;
}

@media only screen and (max-width:959px) and (min-height:600px) {
  .v-snack--bottom {
    margin-bottom: 56px;
  }
}
</style>
