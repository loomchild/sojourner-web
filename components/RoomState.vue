<template>
  <v-icon v-if="state.icon" class="room-state" color="secondary" :title="state.name" @click.stop.prevent>
    {{ state.icon }}
  </v-icon>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RoomState',

  props: {
    room: {
      type: Object,
      default: null
    }
  },

  computed: {
    state () {
      return this.room ? this.roomState(this.room.name) : {}
    },

    ...mapGetters([
      'roomState'
    ])
  }
}
</script>

<style scoped>
button.room-state {
  font-size: 18px;
  vertical-align: text-bottom;
  margin-left: 1px;
}
</style>
