<template>
  <span v-if="event.exists" class="favourite" :class="{large: large}" @click.prevent="toggleFavouriteEvent()">
    <v-icon color="secondary" v-if="favourites[event.id]">bookmark</v-icon>
    <v-icon color="secondary" v-else>bookmark_border</v-icon>
  </span>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'favourite',

  props: {
    event: {
      type: Object
    },
    large: {
      type: Boolean
    }
  },

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

<style scoped>
.favourite {
  cursor: pointer;
}

.favourite.large i {
  font-size: 40px;
  font-weight: normal;
}
</style>
