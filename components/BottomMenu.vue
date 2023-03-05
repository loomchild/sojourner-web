<template>
  <v-bottom-navigation v-if="hasBottomMenu" dark app fixed background-color="secondary">
    <v-btn text to="/">
      <v-icon>mdi-home</v-icon>
      Programme
    </v-btn>

    <v-btn v-if="hasLive" text to="/live/">
      <v-icon>mdi-television-classic</v-icon>
      Live
    </v-btn>

    <v-btn text to="/favourites/">
      <v-icon>mdi-bookmark-multiple</v-icon>
      Bookmarks
    </v-btn>

    <v-btn v-if="hasAll" text to="/all/">
      <v-icon>mdi-view-headline</v-icon>
      All
    </v-btn>

    <v-btn v-if="hasMap && !hasLive" text to="/map/">
      <v-icon>mdi-map</v-icon>
      Map
    </v-btn>

    <v-btn text to="/search/">
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
