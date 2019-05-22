<template>
  <v-container fluid fill-height>
    <div class="map-container">
      <img v-if="building" class="map" :src="require(`@/assets/building-${building.name.toLowerCase()}.svg`)">
      <v-btn to="/map" fab fixed bottom right color="info" title="Zoom out to campus map">
        <v-icon dark>zoom_out</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'building-map',

  props: ['buildingName'],

  computed: {
    building () {
      return this.buildings[this.buildingName]
    },

    ...mapGetters([
      'buildings'
    ])
  }
}
</script>

<style >
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




