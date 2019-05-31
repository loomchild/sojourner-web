<template>
  <span v-if="event.exists" class="favourite" @click.prevent="toggleFavouriteEvent()">
    <v-icon color="secondary" v-if="favourites[event.id]">bookmark</v-icon>
    <v-icon color="secondary" v-else>bookmark_border</v-icon>
  </span>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'favourite',

  props: ['event'],

  computed: mapGetters([
    'favourites'
  ]),

  methods: {
    toggleFavouriteEvent () {
      this.toggleFavourite(this.event.id)
    },

    ...mapActions([
      'toggleFavourite'
    ])
  }
}
</script>

<style>
  .favourite {
    cursor: pointer;
  }
</style>


