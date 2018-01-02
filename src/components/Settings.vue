<template>
  <v-layout row wrap>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex sm12 md6 offset-md3>
            <div class="description">
              <p>Download a fresh version of conference schedule. It is never updated automatically.</p>
            </div>
            <div class="button">
              <v-btn color="primary" dark @click="refresh" :disabled='refreshing'>Refresh Schedule</v-btn>
            </div>
            <div class="description">
              <p>Enable persistent storage. If it's not enabled then your data (favourited events) might be lost.</p>
              <p>For this to work, you need:
              <ol>
                <li>To bookmark this page.</li>
                <li>A modern browser that supports Storage API, such as Firefox or Chromium. On Firefox Mobile this feature is still disabled by default - enable all <code dark>dom.storageManager.*</code> preferences.</li>
              </ol>
              </p>
            </div>
            <div class="button">
              <v-btn color="success" dark v-if="persistent" :ripple="false">Persistent</v-btn>
              <v-btn color="error" dark v-else @click="enablePersistence">Enable Persistence</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import {refreshSchedule} from '../data/schedule'

export default {
  name: 'settings',

  data: () => ({
    refreshing: false
  }),

  computed: mapGetters(['persistent']),

  methods: Object.assign({
    refresh () {
      this.refreshing = true
      return refreshSchedule()
        .then(() => {
          this.showSuccess('Schedule refreshed successfully')
          this.$eventBus.$emit('refreshSchedule')
        })
        .catch(error => {
          this.showError(`Error refreshing schedule: ${error.message}`)
        })
        .then(() => { this.refreshing = false })
    },

    enablePersistence () {
      this.persist()
        .then(persistent => {
          if (persistent) {
            this.showSuccess('Persistence enabled')
          } else {
            this.showError('Unable to activate persistence')
          }
        })
    }
  }, mapActions([
    'showSuccess',
    'showError',
    'persist'
  ]))
}
</script>

<style>
  .card {
    width: 100%;
  }

  div.description {
  }

  div.button {
    margin-bottom: 30px;
    text-align: center;
  }

  li {
    margin-left: 20px;
  }
</style>

