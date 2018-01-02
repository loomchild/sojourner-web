<template>
  <span class="favourite" @click="toggleFavouriteEvent()">
    <v-icon color="yellow darken-2" v-if="favourites[event.id]">star</v-icon>
    <v-icon color="grey lighten-1" v-else>star_border</v-icon>
  </span>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'favourite',

  props: ['event'],

  computed: mapGetters([
    'favourites',
    'persistent'
  ]),

  methods: Object.assign({
    toggleFavouriteEvent () {
      this.toggleFavourite(this.event.id)
      if (!this.persistent) {
        this.showWarning('Persistence is disabled. Enable it via Settings, otherwise your data might be lost.')
      }
    }
  }, mapActions([
    'showWarning',
    'toggleFavourite'
  ]))
}
</script>

<style>
  .favourite {
    cursor: pointer;
  }
</style>


