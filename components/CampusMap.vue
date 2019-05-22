<template>
  <v-container fluid fill-height>
    <div class="map-container">
      <object data="../assets/fosdem-campus.svg" type="image/svg+xml" class="map"></object>
    </div>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'campus-map',

  methods: mapActions([
    'showZoomTip'
  ]),

  created () {
    this.showZoomTip()
  }
}
</script>

<style scoped>
  .map-container {
    width: 100%;
    height: 100%;
  }

  .map {
    display: block;
    max-width: 100%;
    height: 100%;
    margin: auto;
  }
</style>



