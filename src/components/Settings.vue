<template>
  <v-layout row wrap>
    <v-card-text>
      <div class="button">
        <v-btn color="primary" dark @click="refresh" :disabled='refreshing'>Refresh Schedule</v-btn>
      </div>
      <div class="button">
        <v-btn color="primary" dark v-if="persistence" :ripple="false">Persistent</v-btn>
        <v-btn color="error" dark @click="enablePersistence" v-else>Enable Persistence</v-btn>
      </div>
    </v-card-text>
  </v-card>
  </v-layout>
</template>

<script>
import {refreshSchedule} from '../data/schedule'

export default {
  name: 'settings',
  data: () => ({
    persistence: false,
    refreshing: false
  }),
  methods: {
    refresh () {
      this.refreshing = true
      refreshSchedule()
        .then(() => { this.refreshing = false })
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
  div.button {
    margin-bottom: 15px;
  }
</style>

