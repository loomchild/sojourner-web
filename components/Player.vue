<template>
  <div v-if="event && videos.length > 0" :key="videos[0].url" :style="style" class="player" :class="{ floating: !style }">
    <div class="button-panel">
      <v-btn v-if="!style" text icon title="Back to event" :to="{ name: 'event', params: { eventId: event.id } }" class="hover-button ml-2 mr-0">
        <v-icon color="white">
          mdi-seat
        </v-icon>
      </v-btn>
      <v-btn text icon title="Close video" class="hover-button ml-2 mr-0" @click="stop">
        <v-icon color="white">
          mdi-close
        </v-icon>
      </v-btn>
    </div>
    <v-img :aspect-ratio="16/9">
      <video ref="video" controls autoplay class="d-block video">
        <source v-for="video in videos" :key="video.url" :src="video.url" :type="video.type">
      </video>
    </v-img>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Hls from 'hls.js'
let hls = null
const STREAM_TYPE = 'application/vnd.apple.mpegurl'

export default {
  name: 'Player',

  data: () => ({
    style: null,

    url: null
  }),

  computed: {
    docked () {
      return this.$route.name === 'event' && this.dockedPlayer
    },

    videos () {
      return this.event ? this.event.videos : []
    },

    ...mapGetters({
      event: 'playerEvent',
      dockedPlayer: 'dockedPlayer'
    })
  },

  watch: {
    event (event) {
      if (event) {
        this.$nextTick(() => {
          const videoEl = this.$refs.video

          if (!videoEl || videoEl.canPlayType(STREAM_TYPE) === 'probably' || !Hls.isSupported()) {
            return
          }

          if (this.videos.length !== 1 || this.videos[0].type !== STREAM_TYPE || this.videos[0].url === this.url) {
            return
          }

          if (hls) {
            hls.destroy()
          }
          hls = new Hls()

          hls.attachMedia(videoEl)
          hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            hls.loadSource(this.videos[0].url)
            this.url = this.videos[0].url
          })
        })
      }
    },

    docked (docked) {
      if (docked) {
        const eventVideo = document.getElementById('event-video')
        const rect = eventVideo.getBoundingClientRect()
        this.style = {
          position: 'absolute',
          left: rect.left + 'px',
          top: rect.top + 'px',
          width: rect.width + 'px'
        }
      } else {
        this.style = null
      }
    }
  },

  methods: {
    ...mapActions([
      'stop'
    ])
  }
}
</script>

<style scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.floating {
  position: fixed;
  right: 0;
  bottom: 56px;
  width: 450px;
  max-width: 60vw;
  border-left: 1px solid black;
  border-top: 1px solid black;
}

.button-panel {
  position: absolute;
  right: 0;
}

.floating .button-panel {
  top: -36px;
}

.player:not(.floating) .button-panel {
  bottom: -36px;
}

.hover-button {
  background-color: #00000088;
}

.floating .hover-button {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.player:not(.floating) .hover-button {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

@media only screen and (min-width:960px) {
  .hover-button {
    opacity: 0;
  }
}

.player:hover .hover-button {
  opacity: 1.0;
}

@media only screen and (min-width:960px) {
  .floating {
    bottom: 0;
  }
}
</style>
