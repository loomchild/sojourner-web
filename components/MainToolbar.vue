<template>
  <v-toolbar id="toolbar" v-if="$vuetify.breakpoint.xsOnly" app fixed flat color="primary">
    <v-toolbar-side-icon dark v-if="$vuetify.breakpoint.xsOnly && dashboard" @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-btn v-if="!dashboard" @click.stop="goBack" flat icon dark>
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-toolbar id="toolbar" v-else app absolute flat height="82px" color="primary">
    <v-layout>
      <router-link class="logo" v-ripple to="/">
        Sojourner
      </router-link>
      <v-spacer></v-spacer>
      <v-btn flat dark :ripple="false" to="/">Program</v-btn>
      <v-btn flat dark :ripple="false" to="/favourites/">Bookmarks</v-btn>
      <v-btn flat dark :ripple="false" to="/map/">Map</v-btn>
      <v-btn flat dark :ripple="false" to="/search/">Search</v-btn>
      <v-btn flat dark :ripple="false" to="/about/">About</v-btn>
      <v-btn flat icon dark :ripple="false">
        <v-icon flat>person_outline</v-icon>
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
      'title'
    ])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },

    ...mapActions([
      'toggleDrawer'
    ])
  }
}
</script>

<style>
@media only screen and (min-width:600px) {
  #toolbar, #toolbar .logo {
    color: white;
    font-size: 18px;
    font-weight: normal;
    line-height: 33px;
  }

  #toolbar .layout {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  #toolbar .logo {
    background-image: url(~assets/logo-toolbar.png);
    background-position: left center;
    padding-left: 41px;
    padding-right: 10px;
    display: flex;
    align-items: center;
  }

  #toolbar .v-btn {
    font-size: 18px;
    font-weight: normal;
    text-transform: none;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 0;
    margin-right: 0;
    min-width: 0;
  }

  #toolbar .v-btn--active::before {
    background-color: initial;
    border-bottom: 2px solid var(--v-secondary-base);
    opacity: 1.0;
    width: 28px;
    left: calc(50% - 14px);
    /*width: calc(100% - 54px);
    left: 27px;*/
  }

}

#toolbar .v-toolbar__title {
  color: white;
}
</style>
