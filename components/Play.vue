<template>
  <v-icon v-if="canPlay" color="secondary" title="Play video" class="play clickable" :class="{large: large}" @click="playEvent">
    mdi-play-circle-outline
  </v-icon>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    event: {
      type: Object,
      required: true
    },

    large: {
      type: Boolean
    }
  },

  computed: {
    canPlay () {
      return this.event.videos.length > 0
    }
  },

  methods: {
    playEvent () {
      if (this.canPlay) {
        this.play(this.event)
      }
    },

    ...mapActions([
      'play'
    ])
  }
}
</script>

<style scoped>
.play.large {
  font-size: 40px;
  font-weight: normal;
}
</style>
