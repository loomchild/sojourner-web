<template>
  <v-container fluid fill-height class="content">
    <v-layout column>
      <v-flex shrink>
        <page-title></page-title>
      </v-flex>
      <v-flex grow>
        <div class="map-container">
          <img v-if="building" class="map d-block" :src="require(`@/assets/building-${building.name.toLowerCase()}.png`)">
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'building-map',

  components: {
    PageTitle
  },

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
.map-container {
  width: 100%;
  height: 100%;
}

.map {
  max-width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 960px) {
  .map {
    max-height: calc(100vh - 360px);
    margin-left: 0;
    margin-right: 0;
  }
}
</style>




