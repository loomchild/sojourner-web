<template>
  <div>
    <v-btn flat icon v-if="!realUser" :class="{warning: !persistent}" @click.stop="showLoginDialog">
      <v-icon>person_outline</v-icon>
    </v-btn>
    <v-menu v-if="realUser" offset-y open-on-hover close-delay="1000">
      <v-btn flat icon slot="activator" class="user">
        <v-icon>person</v-icon>
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
    ...mapGetters([
      'realUser',
      'persistent'
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
</style>
