<template>
  <v-bottom-navigation v-if="hasBottomMenu" dark app fixed background-color="secondary">
    <v-btn text :to="{ name: 'dashboard', params: { editionId: conferenceEdition.id } }" exact>
      <v-icon>mdi-home</v-icon>
      Programme
    </v-btn>

    <v-btn v-if="hasLive" text :to="{ name: 'live-events', params: { editionId: conferenceEdition.id } }" exact>
      <v-icon>mdi-television-classic</v-icon>
      Live
    </v-btn>

    <v-btn text :to="{ name: 'favourite-events', params: { editionId: conferenceEdition.id } }" exact>
      <v-icon>mdi-bookmark-multiple</v-icon>
      Bookmarks
    </v-btn>

    <v-btn v-if="hasAll" text :to="{ name: 'all', params: { editionId: conferenceEdition.id } }" exact>
      <v-icon>mdi-view-headline</v-icon>
      All
    </v-btn>

    <v-btn v-if="hasMap && !hasLive" text :to="{ name: 'campus-map', params: { editionId: conferenceEdition.id } }">
      <v-icon>mdi-map</v-icon>
      Map
    </v-btn>

    <v-btn text :to="{ name: 'search-events', params: { editionId: conferenceEdition.id } }" exact>
      <v-icon>mdi-magnify</v-icon>
      Search
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BottomMenu',

  computed: {
    hasBottomMenu () {
      return this.$vuetify.breakpoint.smAndDown && screen.height >= 600
    },

    ...mapGetters([
      'conferenceEdition',
      'hasMap',
      'hasAll',
      'hasLive'
    ])
  }
}
</script>

<style scoped>
.v-btn {
  font-size: 10px !important;
  flex: 1 1 0 !important;
}

.v-btn :deep(.v-btn__content) {
  flex-direction: column !important;
}
</style>
