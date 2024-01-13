<template>
  <span v-if="track" class="favourite" @click.prevent="toggleFavouriteTrack(track.name)">
    <v-icon v-if="value" color="secondary">mdi-star</v-icon>
    <v-icon v-else color="secondary" class="opaque">mdi-star-outline</v-icon>
  </span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FavouriteTrack',

  props: {
    track: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'favouriteTracks'
    ]),

    value () {
      return this.favouriteTracks[this.track.name]
    }
  },

  methods: {
    ...mapActions([
      'toggleFavouriteTrack'
    ])
  }
}
</script>

<style scoped>
.favourite {
  cursor: pointer;
}

.opaque {
  opacity: 0.6;
}
</style>
