<template>
  <v-snackbar :timeout="5000" :color="color" bottom multi-line v-model="show">
    {{ message }}
    <v-btn flat small @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'notification',
  data: () => ({
    show: false,
    color: null,
    message: ''
  }),
  methods: {
    showMessage (message, color = null) {
      this.message = message
      this.color = color
      this.show = true
    }
  },

  created () {
    this.$eventBus.$on('showMessage', (message, color) => this.showMessage(message, color))
  }
}
</script>

<style>
  button {
    margin-left: 10px !important;
  }
</style>


