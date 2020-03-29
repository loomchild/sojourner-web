<template>
  <v-bottom-nav dark app fixed :value="hasBottomMenu" color="secondary">
    <v-btn flat to="/">
      <v-icon>home</v-icon>
      Programme
    </v-btn>

    <v-btn flat to="/favourites/">
      <v-icon>bookmarks</v-icon>
      Bookmarks
    </v-btn>

    <v-btn v-if="hasAll" flat to="/all/">
      <v-icon>view_headline</v-icon>
      All
    </v-btn>

    <v-btn v-if="hasMap" flat to="/map/">
      <v-icon>map</v-icon>
      Map
    </v-btn>

    <v-btn flat to="/search/">
      <v-icon>search</v-icon>
      Search
    </v-btn>
  </v-bottom-nav>
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
      'hasAll'
    ])
  }
}
</script>

<style scoped>
.v-btn {
  padding-top: 8px !important;
}

.v-btn /deep/ .v-btn__content {
  flex-direction: column !important;
  font-size: 10px !important;
}
</style>
