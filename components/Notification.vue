<template>
  <v-snackbar :timeout="notification.timeout" :color="notification.color" bottom multi-line :value="notificationVisible" @input="setNotificationVisible">
    {{ notification.message }}
    <v-btn flat small icon @click.native="setNotificationVisible(false)"><v-icon>close</v-icon></v-btn>
  </v-snackbar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'notification',

  computed: mapGetters([
    'notification',
    'notificationVisible'
  ]),

  methods: mapActions([
    'setNotificationVisible'
  ])
}
</script>

<style>
  button {
    margin-left: 10px !important;
  }

  @media only screen and (max-width:959px) {
    .v-snack {
      margin-bottom: 56px;
    }
  }
</style>


