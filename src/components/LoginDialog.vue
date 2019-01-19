<template>
  <v-dialog :value="loginDialog" @input="setLoginDialog" @keydown.esc="setLoginDialog(false)" width="400">
    <v-card>
      <v-card-title>
        <span class="headline">Log In</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-flex xs12>
            <v-text-field label="Email" v-model="email" required autofocus></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Password" v-model="password" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility_off' : 'visibility'" @click:append="showPassword = !showPassword" @keyup.native.enter="clickLogIn"></v-text-field>
          </v-flex>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="hideLoginDialog">Cancel</v-btn>
        <v-btn color="success" @click="clickLogIn">Log In</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'login-dialog',
  data: () => ({
    email: '',
    password: '',
    showPassword: false
  }),
  computed: mapGetters([
    'loginDialog'
  ]),
  methods: {
    reset () {
      this.email = ''
      this.password = ''
      this.showPassword = false
    },

    setLoginDialog (loginDialog) {
      this.reset()
      if (loginDialog) {
        this.showLoginDialog()
      } else {
        this.hideLoginDialog()
      }
    },

    clickLogIn () {
      this.logIn({email: this.email, password: this.password})
        .then(() => {
          this.showSuccess('Logged in successfully')
          this.setLoginDialog(false)
        })
        .catch(error => {
          this.showError(error.message)
          this.password = ''
          this.showPassword = false
        })
    },

    ...mapActions([
      'showLoginDialog',
      'hideLoginDialog',
      'logIn',
      'showSuccess',
      'showError'
    ])
  }
}
</script>

<style>
</style>
