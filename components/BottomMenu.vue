<template>
  <v-bottom-nav dark app fixed :value="$vuetify.breakpoint.smAndDown" color="secondary">
    <v-btn flat to="/">
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn flat to="/favourites/">
      <v-icon>bookmarks</v-icon>
    </v-btn>

    <v-btn flat to="/map/">
      <v-icon>map</v-icon>
    </v-btn>

    <v-btn flat to="/search/">
      <v-icon>search</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'bottom-menu'
}
</script>

<style scoped>
</style>


