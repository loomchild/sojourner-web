<template>
  <span v-if="event.exists" class="favourite" :class="{large: large}" @click.prevent="toggleFavouriteEvent()">
    <v-icon v-if="favourites[event.id]" color="secondary">mdi-bookmark</v-icon>
    <v-icon v-else color="secondary" class="opaque">mdi-bookmark-outline</v-icon>
  </span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Favourite',

  props: {
    event: {
      type: Object,
      required: true
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

.opaque {
  opacity: 0.6;
}
</style>
