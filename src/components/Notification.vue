<template>
  <v-snackbar :timeout="5000" :color="notification.color" bottom multi-line :value="notificationVisible" @input="setNotificationVisible">
    {{ notification.message }}
    <v-btn flat small @click.native="setNotificationVisible(false)">Close</v-btn>
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
</style>


