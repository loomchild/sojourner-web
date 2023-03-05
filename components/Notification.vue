<template>
  <v-snackbar :value="notification.message" :timeout="notification.timeout" :color="color" bottom multi-line @input="hide">
    <v-row>
      <v-col cols="10">
        {{ notification.message }}
        <v-btn v-if="notification.button" text small @click.native="button()">
          {{ notification.button.title }}
        </v-btn>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-btn text small icon @click.native="hide()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
@media only screen and (max-width:959px) and (min-height:600px) {
  .v-snack--bottom {
    margin-bottom: 56px;
  }
}
</style>
