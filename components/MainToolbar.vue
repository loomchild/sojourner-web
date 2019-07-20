<template>
  <v-toolbar v-if="$vuetify.breakpoint.smAndDown" app fixed flat color="primary">
    <v-toolbar-side-icon dark v-if="$vuetify.breakpoint.smAndDown && dashboard" @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-btn v-if="!dashboard" @click.stop="goBack" flat icon dark>
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-toolbar v-else app absolute flat height="82px">
    <v-layout class="mx-auto">
      <v-toolbar-title class="logo d-flex" v-ripple v-go="'/'" prepend-icon="home">
        Sojourner
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat dark class="mx-0" :ripple="false" to="/">Program</v-btn>
      <v-btn flat dark class="mx-0" :ripple="false" to="/favourites/">Bookmarks</v-btn>
      <v-btn flat dark class="mx-0" :ripple="false" to="/map/">Map</v-btn>
      <v-btn flat dark class="mx-0" :ripple="false" to="/search/">Search</v-btn>
      <v-btn flat dark class="mx-0" :ripple="false" to="/about/">About</v-btn>
      <v-btn v-if="!realUser" flat icon dark class="mx-0" :ripple="false" @click.stop="showLoginDialog">
        <v-icon flat>person_outline</v-icon>
      </v-btn>
      <v-btn v-if="realUser" flat icon dark class="mx-0" :ripple="false" @click.stop="clickLogOut">
        <v-icon flat>person</v-icon>
      </v-btn>
    </v-layout>
  </v-toolbar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'main-toolbar',
  computed: {
    dashboard () {
      return this.$route.path === '/'
    },

    ...mapGetters([
      'title',
      'realUser'
    ])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },

    clickLogOut () {
      return this.logOut()
        .then(() => this.showMessage('Logged out successfully'))
        .catch(error => this.showError(error.message))
    },

    ...mapActions([
      'toggleDrawer',
      'showLoginDialog',
      'logOut',
      'showMessage'
    ])
  }
}
</script>

<style scoped>
.v-toolbar__title {
  color: white;
}

@media only screen and (min-width:960px) {
  .v-icon, .v-btn, .v-toolbar {
    transition: none !important;
  }


  .v-toolbar, .logo {
    background-color: var(--v-primary-base);
    color: white;
    font-size: 18px;
    font-weight: normal;
    line-height: 33px;
    letter-spacing: inherit;
    user-select: none;
  }

  .layout-default .v-toolbar,
  .layout-default .logo,
  .layout-default .v-toolbar__title,
  .layout-default .v-btn {
    background-color: white;
    color: var(--grey-darken-4);
  }

  .layout {
    max-width: 960px;
  }

  .logo {
    background-image: url(~assets/logo-toolbar.png);
    background-position: left center;
    padding-left: 41px;
    padding-right: 10px;
    align-items: center;
  }

  .v-btn {
    font-size: 18px;
    font-weight: normal;
    text-transform: none;
    padding-left: 15px;
    padding-right: 15px;
    min-width: 0;
  }

  .v-btn::before {
    background-color: initial;
    opacity: 1.0;
    width: 0;
    transition: width 0.15s ease-in;
  }

  .v-btn--active::before {
    border-bottom: 2px solid var(--v-secondary-base);
    width: 28px;
    left: calc(50% - 14px);
    /*width: calc(100% - 54px);
    left: 27px;*/
  }
}
</style>
