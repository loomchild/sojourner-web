<template>
  <v-container fluid fill-height>
    <div class="map-container">
      <img v-if="building" class="map d-block" :src="require(`@/assets/building-${building.name.toLowerCase()}.png`)">
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
  },

  metaInfo () {
    return {
      title: `Building ${this.buildingName}`
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #ffffff;
}

.map-container {
  width: 100%;
  height: 100%;
}

.map {
  max-width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: contain;
  margin: auto;
}
</style>




