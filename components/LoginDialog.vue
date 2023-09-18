<template>
  <v-dialog :value="loginDialog" width="500" @input="setLoginDialog" @keydown.esc="setLoginDialog(false)">
    <v-tabs v-model="action">
      <v-tab>Log-in</v-tab>
      <v-tab>Register</v-tab>
      <v-tab-item>
        <v-form ref="formLogin" @submit.prevent="clickLogIn">
          <v-card>
            <v-card-title class="pb-0">
              <v-container>
                <v-row>
                  <v-col cols="12" class="text-h5">
                    Log-in
                  </v-col>
                </v-row>
              </v-container>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    You don't have an account yet? <a @click="action = 1">Register</a> instead.<br />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="email" label="Email" name="name" :rules="[v => !!v || 'Email is required']" required autofocus autocapitalize="none" autocomplete="username"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="password" label="Password" name="password" :rules="[v => !!v || 'Password is required']" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" autocomplete="current-password" @click:append="showPassword = !showPassword"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-col cols="auto">
                    <v-btn text @click="hideLoginDialog">
                      Cancel
                    </v-btn>
                    <v-btn type="submit" color="secondary">
                      Log-in
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-tab-item>
      <v-tab-item>
        <v-form ref="formRegister" @submit.prevent="clickRegister">
          <v-card>
            <v-card-title class="pb-0">
              <v-container>
                <v-row>
                  <v-col cols="12" class="text-h5">
                    Register
                  </v-col>
                </v-row>
              </v-container>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-container>
                <v-row>
                  <v-col cols="12" class="mb-4">
                    You already have an account? <a @click="action = 0">Log-in</a> instead.
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="email" label="Email" name="name" :rules="[v => !!v || 'Email is required']" required autofocus autocomplete="username"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="password" label="Password" name="password" :rules="[v => !!v || 'Password is required']" required :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" autocomplete="new-password" @click:append="showPassword = !showPassword"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-col cols="auto">
                    <v-btn text @click="hideLoginDialog">
                      Cancel
                    </v-btn>
                    <v-btn type="submit" color="secondary">
                      Register
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
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
  computed: {
    formLogin () {
      return this.$refs.formLogin
    },

    formRegister () {
      return this.$refs.formRegister
    },

    ...mapGetters([
      'loginDialog'
    ])
  },
  methods: {
    reset () {
      setTimeout(() => {
        this.email = null
        this.password = null
        this.showPassword = false
        this.action = 0
        if (this.formLogin) {
          this.formLogin.resetValidation()
        }
        if (this.formRegister) {
          this.formRegister.resetValidation()
        }
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

    async clickLogIn () {
      if (!this.formLogin.validate()) return

      try {
        await this.logIn({ email: this.email, password: this.password })
        this.showMessage('Logged in successfully')
        this.reset()
        this.setLoginDialog(false)
      } catch (error) {
        this.showError(error.message)
        this.password = ''
        this.showPassword = false
      }
    },

    async clickRegister () {
      if (!this.formRegister.validate()) return

      try {
        await this.register({ email: this.email, password: this.password })
        this.showMessage('Registered successfully')
        this.reset()
        this.setLoginDialog(false)
      } catch (error) {
        this.showError(error.message)
      }
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
