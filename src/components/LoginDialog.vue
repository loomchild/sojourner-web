<template>
  <v-dialog :value="loginDialog" @input="setLoginDialog" @keydown.esc="setLoginDialog(false)" width="400">
    <v-tabs v-model="action">
      <v-tab>Log In</v-tab>
      <v-tab>Register</v-tab>
      <v-tab-item>
        <v-form ref="formLogin" @submit.prevent="clickLogIn">
          <v-card>
            <v-card-title>
              <span class="headline">Log In</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-flex xs12 class="switch-tab">
                  You don't have an account yet? <a @click="action = 1">Register</a> instead.
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email" name="name" v-model="email" :rules="[v => !!v || 'Email is required']" required autofocus></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" v-model="password" name="password" :rules="[v => !!v || 'Password is required']" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility_off' : 'visibility'" @click:append="showPassword = !showPassword"></v-text-field>
                </v-flex>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="hideLoginDialog">Cancel</v-btn>
              <v-btn type="submit" color="success">Log In</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-tab-item>
      <v-tab-item>
        <v-form ref="formRegister" @submit.prevent="clickRegister">
          <v-card>
            <v-card-title>
              <span class="headline">Register</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-flex xs12 class="switch-tab">
                  You already have an account? <a @click="action = 0">Log In</a> instead.
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email" name="name" v-model="email" :rules="[v => !!v || 'Email is required']" required autofocus></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" v-model="password" name="password" :rules="[v => !!v || 'Password is required']" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility_off' : 'visibility'" @click:append="showPassword = !showPassword"></v-text-field>
                </v-flex>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="hideLoginDialog">Cancel</v-btn>
              <v-btn type="submit" color="info">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-tab-item>
    </v-tabs>
  </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'login-dialog',
  data: () => ({
    email: '',
    password: '',
    showPassword: false,
    action: 0
  }),
  computed: mapGetters([
    'loginDialog'
  ]),
  methods: {
    reset () {
      setTimeout(() => {
        this.email = null
        this.password = null
        this.showPassword = false
        this.$refs.formLogin.resetValidation()
        this.$refs.formRegister.resetValidation()
        this.action = 0
      }, 200)
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
      if (!this.$refs.formLogin.validate()) return

      this.logIn({email: this.email, password: this.password})
        .then(() => {
          this.showSuccess('Logged in successfully')
          this.reset()
          this.setLoginDialog(false)
        })
        .catch(error => {
          this.showError(error.message)
          this.password = ''
          this.showPassword = false
        })
    },

    clickRegister () {
      if (!this.$refs.formRegister.validate()) return

      this.register({email: this.email, password: this.password})
        .then(() => {
          this.showSuccess('Registered successfully')
          this.reset()
          this.setLoginDialog(false)
        })
        .catch(error => {
          this.showError(error.message)
        })
    },

    ...mapActions([
      'showLoginDialog',
      'hideLoginDialog',
      'logIn',
      'register',
      'showSuccess',
      'showError'
    ])
  }
}
</script>

<style>
.switch-tab {
  margin-bottom: 1rem;
}
</style>
