<template>
  <v-app-bar v-if="$vuetify.breakpoint.smAndDown" app fixed flat dark color="primary" height="56">
    <v-app-bar-nav-icon v-if="dashboard" dark @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-btn v-if="!dashboard" text icon dark @click.stop="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title class="pl-0">
      {{ pageTitle }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="eventDetails" text icon dark replace class="updown mx-0" :ripple="false" :disabled="!previousEvent" :to="previousEvent ? `/event/${previousEvent.id}` : null">
      <v-icon>
        mdi-arrow-up
      </v-icon>
    </v-btn>
    <v-btn v-if="eventDetails" text icon dark replace class="updown ml-0" :ripple="false" :disabled="!nextEvent" :to="nextEvent ? `/event/${nextEvent.id}` : null">
      <v-icon>
        mdi-arrow-down
      </v-icon>
    </v-btn>
  </v-app-bar>
  <v-app-bar v-else app absolute flat color="transparent" height="82px">
    <v-row class="mx-auto" align="center">
      <router-link v-ripple to="/" class="d-block">
        <v-toolbar-title class="logo" prepend-icon="home">
          &nbsp;
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn text dark class="mx-0" :ripple="false" to="/">
        Programme
      </v-btn>
      <v-btn v-if="hasLive" text dark class="mx-0" :ripple="false" to="/live">
        Live
      </v-btn>
      <v-btn text dark class="mx-0" :ripple="false" to="/favourites/">
        Bookmarks
      </v-btn>
      <v-btn v-if="hasAll" text dark class="mx-0" :ripple="false" to="/all/">
        All
      </v-btn>
      <v-btn v-if="hasMap" text dark class="mx-0" :ripple="false" to="/map/">
        Map
      </v-btn>
      <v-btn text dark class="mx-0" :ripple="false" to="/search/">
        Search
      </v-btn>
      <v-btn v-if="stands" text dark class="mx-0" :ripple="false" :href="stands" target="_blank">
        Stands
      </v-btn>
      <v-btn text dark class="mx-0" :ripple="false" to="/about/">
        About
      </v-btn>
      <v-btn v-if="!realUser" text icon dark class="mx-0" :ripple="false" @click.stop="showLoginDialog">
        <v-icon text>
          mdi-account-outline
        </v-icon>
      </v-btn>
      <v-menu v-else offset-y left>
        <template #activator="{ on, attrs }">
          <v-btn text icon dark class="mx-0" :ripple="false" v-bind="attrs" v-on="on">
            <v-icon text>
              mdi-account
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ realUser.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click.stop="clickLogOut">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="mr-2">
                  mdi-account-outline
                </v-icon>
                Log-out
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainToolbar',
  computed: {
    dashboard () {
      return this.$route.path === '/'
    },

    eventDetails () {
      if (this.$route.name !== 'event') {
        return null
      }
      const eventId = this.$route.params.eventId
      return this.events[eventId]
    },

    nextEvent () {
      return this.nextTrackEvent(this.eventDetails)
    },

    previousEvent () {
      return this.previousTrackEvent(this.eventDetails)
    },

    ...mapGetters([
      'pageTitle',
      'hasMap',
      'hasAll',
      'hasLive',
      'realUser',
      'conferenceName',
      'stands',
      'events',
      'nextTrackEvent',
      'previousTrackEvent'
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
.updown {
  width: 36px !important;
}

@media only screen and (min-width:960px) {
  .v-icon, .v-btn, .v-toolbar {
    transition: none !important;
  }

  .v-app-bar {
    background-color: var(--v-primary-base);
    color: white;
    font-size: 18px;
    font-weight: normal;
    line-height: 33px;
    user-select: none;
  }

  .layout-default .v-app-bar,
  .layout-default .v-btn {
    background-color: white;
    color: var(--grey-darken-4);
  }

  .row {
    max-width: 960px;
  }

  .logo {
    background-color: transparent !important;
    background-image: url(~confassets/menu-logo.png);
    background-position: left center;
    background-size: auto 26px;
    width: 200px;
  }

  .layout-default .logo {
    filter: invert(0.9);
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
    opacity: 1.0 !important;
    width: 0;
    transition: width 0.15s ease-in;
  }

  .v-btn--active::before {
    border-bottom: 2px solid var(--v-secondary-base);
    border-radius: unset;
    width: 28px;
    left: calc(50% - 14px);
    /*width: calc(100% - 54px);
    left: 27px;*/
  }
}
</style>
