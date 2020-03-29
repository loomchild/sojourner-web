<template>
  <v-dialog :value="loginDialog" width="500" @input="setLoginDialog" @keydown.esc="setLoginDialog(false)">
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
                <v-col cols="12" class="mb-3">
                  You don't have an account yet? <a @click="action = 1">Register</a> instead.<br />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email" name="name" :rules="[v => !!v || 'Email is required']" required autofocus autocapitalize="none" autocomplete="username"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password" label="Password" name="password" :rules="[v => !!v || 'Password is required']" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility_off' : 'visibility'" autocomplete="current-password" @click:append="showPassword = !showPassword"></v-text-field>
                </v-col>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="hideLoginDialog">
                Cancel
              </v-btn>
              <v-btn type="submit" color="success">
                Log In
              </v-btn>
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
                <v-col cols="12" class="mb-3">
                  You already have an account? <a @click="action = 0">Log In</a> instead.
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email" name="name" :rules="[v => !!v || 'Email is required']" required autofocus autocomplete="username"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password" label="Password" name="password" :rules="[v => !!v || 'Password is required']" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility_off' : 'visibility'" autocomplete="new-password" @click:append="showPassword = !showPassword"></v-text-field>
                </v-col>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="hideLoginDialog">
                Cancel
              </v-btn>
              <v-btn type="submit" color="success">
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-tab-item>
    </v-tabs>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginDialog',
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

      this.logIn({ email: this.email, password: this.password })
        .then(() => {
          this.showMessage('Logged in successfully')
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

      this.register({ email: this.email, password: this.password })
        .then(() => {
          this.showMessage('Registered successfully')
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
      'showMessage',
      'showError'
    ])
  }
}
</script>

<style scoped>
</style>
