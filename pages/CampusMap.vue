<template>
  <v-container fluid fill-height>
    <div class="map-container">
      <object id="campus-map" :data="require('@/assets/fosdem-campus.svg')" type="image/svg+xml" class="map"></object>
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
  },

  mounted () {
    const map = document.getElementById('campus-map')
    map.addEventListener('load', () => {
      const mapDocument = map.contentDocument
      const buildings = Array.from(mapDocument.getElementsByClassName('building'))
      buildings.forEach(building => {
        building.addEventListener('click', () => {
          this.$router.push(`/building/${building.id.substring(9)}`)
        })
      })
    })
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



