<template>
  <v-bottom-nav id="bottom-menu" class="hidden-md-and-up" app fixed :value="true" color="secondary">
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
#bottom-menu .v-btn {
  opacity: 1;
}
</style>


