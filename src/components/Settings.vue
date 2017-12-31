<template>
  <v-layout row wrap>
    <v-card>
      <v-card-text>
        <div class="button">
          <v-btn color="primary" dark @click="refresh" :disabled='refreshing'>Refresh Schedule</v-btn>
        </div>
        <div class="button">
          <v-btn color="success" dark v-if="persistence" :ripple="false">Persistent</v-btn>
          <v-btn color="error" dark @click="enablePersistence" v-else>Enable Persistence</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import {refreshSchedule} from '../data/schedule'
import {isPersistent, enablePersistence} from '../data/favourite'

export default {
  name: 'settings',
  data: () => ({
    persistence: false,
    refreshing: false
  }),
  methods: {
    refresh () {
      this.refreshing = true
      return refreshSchedule()
        .then(() => {
          this.$eventBus.$emit('showMessage', 'Schedule refreshed successfully', 'success')
          this.$eventBus.$emit('refreshSchedule')
        })
        .catch(error => {
          this.$eventBus.$emit('showMessage', `Error refreshing schedule: ${error.message}`, 'error')
        })
        .then(() => { this.refreshing = false })
    },

    enablePersistence () {
      enablePersistence()
        .then(persistent => {
          this.persistence = persistent
          if (persistent) {
            this.$eventBus.$emit('showMessage', 'Persistence enabled', 'success')
          } else {
            this.$eventBus.$emit('showMessage', 'Unable to activate persistence', 'error')
          }
        })
    },

    updatePersistence () {
      isPersistent().then(persistent => { this.persistence = persistent })
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

