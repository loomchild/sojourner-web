<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex sm12 md6 offset-md3>
              <div class="description">
                <p>Download a fresh version of conference schedule. Usually there's no need to do that, since it's done automatically.</p>
              </div>
              <div class="button">
                <v-btn color="primary" dark @click="refresh" :disabled='refreshing'>Refresh Schedule</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'settings',

  data: () => ({
    refreshing: false
  }),

  methods: {
    refresh () {
      this.refreshing = true
      return this.refreshSchedule()
        .then(() => {
          this.showSuccess('Schedule refreshed successfully')
        })
        .catch(error => {
          this.showError(`Error refreshing schedule: ${error.message}`)
        })
        .then(() => { this.refreshing = false })
    },

    ...mapActions([
      'showSuccess',
      'showError',
      'refreshSchedule'
    ])
  }
}
</script>

<style>
  .v-card {
    width: 100%;
  }

  div.description {
  }

  div.button {
    margin-bottom: 30px;
    text-align: center;
  }
</style>

