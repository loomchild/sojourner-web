<template>
  <v-snackbar :timeout="notification.timeout" :color="notification.color" bottom multi-line :value="notificationVisible" @input="setNotificationVisible">
    {{ notification.message }}
    <v-btn v-if="notification.button" flat small @click.native="setNotificationVisible(false); notification.button.handler();">{{ notification.button.title }}</v-btn>
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
.v-snack button {
  margin-left: 10px !important;
}
</style>


