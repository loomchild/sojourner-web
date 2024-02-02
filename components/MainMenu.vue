<template>
  <v-navigation-drawer v-if="$vuetify.breakpoint.smAndDown" app clipped fixed :value="drawer" width="250" height="480" @input="setDrawer">
    <v-list dark class="pa-0">
      <menu-item title="Programme" icon="mdi-home" :to="{ name: 'dashboard', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item v-if="hasLive" title="Live" icon="mdi-television-classic" :to="{ name: 'live-events', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item title="Bookmarks" icon="mdi-bookmark-multiple" :to="{ name: 'favourite-events', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item v-if="hasAll" title="All" icon="mdi-view-headline" :to="{ name: 'all', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item v-if="hasMap" title="Map" icon="mdi-map" :to="{ name: 'campus-map', params: { editionId: conferenceEdition.id } }"></menu-item>
      <menu-item title="Search" icon="mdi-magnify" :to="{ name: 'search-events', params: { editionId: conferenceEdition.id } }"></menu-item>
      <v-divider class="mx-4"></v-divider>

      <menu-item v-if="!realUser" title="Log-in" icon="mdi-account-outline" @click="showLoginDialog(); setDrawer(false);"></menu-item>
      <v-menu v-else offset-y left>
        <template #activator="{ on, attrs }">
          <v-list-item exact ripple v-bind="attrs" v-on="on">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ realUser.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list>
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

      <menu-item title="About" icon="mdi-information" :to="{ name: 'about' }"></menu-item>
    </v-list>
    <div class="menu-logo">
      <img src="~assets/menu-logo.png">
      <div>
        {{ conferenceName }}
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import MenuItem from './MenuItem'

export default {
  name: 'MainMenu',

  components: {
    'menu-item': MenuItem
  },

  computed: mapGetters([
    'conferenceEdition',
    'conferenceName',
    'drawer',
    'realUser',
    'hasMap',
    'hasAll',
    'hasLive'
  ]),

  methods: {
    async clickLogOut () {
      try {
        await this.logOut()
        this.showMessage('Logged out successfully')
        this.setDrawer(false)
      } catch (error) {
        this.showError(error.message)
      }
    },

    ...mapActions([
      'setDrawer',
      'showLoginDialog',
      'logOut',
      'showError',
      'showMessage'
    ])
  }
}
</script>

<style scroped>
.v-navigation-drawer {
  border-radius: 0 0 100px 0;
  background-color: var(--v-secondary-base) !important;
}

.v-navigation-drawer .v-list {
  margin-top: 16px;
}

.v-navigation-drawer .v-divider {
  border-color: var(--v-secondary-lighten5) !important;
  border-width: 1px;
}

.menu-logo {
  position: absolute;
  left: 16px;
  bottom: 12px;
  opacity: 0.5;
  line-height: 1;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: white;
  gap: 12px;
}
</style>
