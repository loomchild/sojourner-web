<template>
  <v-container fluid class="content">
    <v-row class="ma-0">
      <v-col class="pa-0">
        <page-title back-arrow="secondary"></page-title>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col class="grow pa-0 pa-md-2">
        <div class="map-container">
          <img v-if="building" class="map d-block" :src="require(`confassets/building-${building.name.toLowerCase()}.png`)">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'BuildingMap',

  components: {
    PageTitle
  },

  props: {
    buildingName: {
      type: String,
      required: true
    }
  },

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
    max-height: calc(100vh - 320px);
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
