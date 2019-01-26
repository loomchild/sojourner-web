<template>
  <div>
    <v-btn v-if="!isUser" class="user" dark @click.stop="showLoginDialog">
      <v-icon>account_circle</v-icon>
      Log in / Register
    </v-btn>
    <v-menu v-if="isUser" offset-y open-on-hover close-delay="1000">
      <v-btn slot="activator" class="user" dark>
        <v-icon>account_circle</v-icon>
        {{ user.email }}
      </v-btn>
      <v-list>
        <v-list-tile @click.stop="clickLogOut" ripple>
          <v-list-tile-title>Log out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <login-dialog></login-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import LoginDialog from './LoginDialog'

export default {
  name: 'account-badge',
  components: {
    LoginDialog
  },
  computed: {
    isUser () {
      return this.user && !this.user.isAnonymous
    },

    ...mapGetters([
      'user'
    ])
  },
  methods: {
    clickLogOut () {
      this.logOut()
        .catch(error => this.showError(error.message))
    },

    ...mapActions([
      'showLoginDialog',
      'logOut',
      'showError'
    ])
  }
}
</script>

<style>
.user {
}

.user i {
  margin-right: 10px;
}
</style>
