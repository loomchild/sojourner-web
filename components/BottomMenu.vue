<template>
  <v-bottom-nav id="bottom-menu" app fixed :value="$vuetify.breakpoint.smAndDown" color="secondary">
    <v-btn color="white" flat to="/">
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn color="white" flat to="/favourites/">
      <v-icon>bookmarks</v-icon>
    </v-btn>

    <v-btn color="white" flat to="/map/">
      <v-icon>map</v-icon>
    </v-btn>

    <v-btn color="white" flat to="/search/">
      <v-icon>search</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'bottom-menu'
}
</script>

<style>
</style>


