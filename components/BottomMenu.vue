<template>
  <v-bottom-nav dark app fixed :value="hasBottomMenu" color="secondary">
    <v-btn flat to="/">
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn flat to="/favourites/">
      <v-icon>bookmarks</v-icon>
    </v-btn>

    <v-btn v-if="hasMap" flat to="/map/">
      <v-icon>map</v-icon>
    </v-btn>

    <v-btn flat to="/search/">
      <v-icon>search</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'bottom-menu',

  computed: {
    hasBottomMenu () {
      return this.$vuetify.breakpoint.smAndDown && screen.height >= 600
    },

    ...mapGetters([
      'hasMap'
    ])
  }
}
</script>

<style scoped>
</style>


