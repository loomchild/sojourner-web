<template>
  <v-img :key="event.id" :src="event.videos.length === 0 ? background : undefined" :aspect-ratio="16/9" class="image">
    <video v-if="event.videos.length > 0" ref="video" controls poster="~confassets/video.jpg" preload="none" class="d-block video">
      <source v-for="video in event.videos" :key="video.url" :src="video.url" :type="video.type">
    </video>
  </v-img>
</template>

<script>
import Hls from 'hls.js'
let hls = null
const STREAM_TYPE = 'application/vnd.apple.mpegurl'

export default {
  name: 'Player',

  props: {
    event: {
      type: Object,
      required: true
    }
  },

  computed: {
    background () {
      return this.event ? require(`confassets/${this.event.type.background}`) : ''
    }
  },

  activated () {
    this.updateEvent()
  },

  methods: {
    updateEvent () {
      const videoEl = this.$refs.video

      if (!videoEl || videoEl.canPlayType(STREAM_TYPE) || !Hls.isSupported()) {
        return
      }

      if (this.event.videos.length !== 1 || this.event.videos[0].type !== STREAM_TYPE) {
        return
      }

      if (hls) {
        hls.destroy()
      }
      hls = new Hls()

      hls.attachMedia(videoEl)
      hls.on(Hls.Events.MEDIA_ATTACHED, () =>
        hls.loadSource(this.event.videos[0].url)
      )
    }
  }
}
</script>

<style scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

@media only screen and (max-width:959px) {
  .image {
    background: #f4d9d0;
    background-size: 100% auto, auto;
  }
}
</style>
