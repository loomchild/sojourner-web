<template>
  <v-layout row wrap>
    <v-card>
      <v-card-text>
        <div class="button">
          <v-btn color="primary" dark @click="refresh" :disabled='refreshing'>Refresh Schedule</v-btn>
        </div>
        <div class="button">
          <v-btn color="primary" dark v-if="persistence" :ripple="false">Persistent</v-btn>
          <v-btn color="error" dark @click="enablePersistence" v-else>Enable Persistence</v-btn>
        </div>
      </v-card-text>
      <v-snackbar :timeout="5000" :color="snackbar.color" bottom v-model="snackbar.show">
        {{ snackbar.message }}
        <v-btn flat small @click.native="hideMessage()">Close</v-btn>
      </v-snackbar>
    </v-card>
  </v-layout>
</template>

<script>
import {refreshSchedule} from '../data/schedule'

export default {
  name: 'settings',
  data: () => ({
    persistence: false,
    refreshing: false,
    snackbar: {
      show: false
    }
  }),
  methods: {
    refresh () {
      this.refreshing = true
      return refreshSchedule()
        .then(() => {
          this.refreshing = false
          this.showMessage('success', 'Schedule refreshed successfully')
          this.$eventBus.$emit('refreshSchedule')
        })
        .catch(error => {
          this.refreshing = false
          this.showMessage('error', `Error refreshing schedule: ${error.message}`)
        })
    },

    showMessage (color, message) {
      this.snackbar = {
        show: true,
        color: color,
        message: message
      }
    },

    hideMessage () {
      this.snackbar = { show: false }
    },

    enablePersistence () {
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist()
          .then(persistence => {
            this.persistence = persistence
          })
      }
    },

    updatePersistence () {
      if (navigator.storage && navigator.storage.persisted) {
        return navigator.storage.persisted()
          .then(persistence => {
            this.persistence = persistence
          })
      } else {
        this.persistence = false
      }
    }
  },

  created () {
    this.updatePersistence()
  }
}
</script>

<style>
  .card {
    width: 100%;
  }

  div.button {
    margin-bottom: 15px;
  }
</style>

