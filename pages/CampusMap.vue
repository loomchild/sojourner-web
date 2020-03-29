<template>
  <v-container fluid class="content fill-hight">
    <v-row>
      <v-col class="shrink">
        <page-title></page-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="grow">
        <div class="map-container">
          <div class="map">
            <router-link id="building-k" to="/building/K">
              &nbsp;
            </router-link>
            <router-link id="building-j" to="/building/J">
              &nbsp;
            </router-link>
            <router-link id="building-h" to="/building/H">
              &nbsp;
            </router-link>
            <router-link id="building-aw" to="/building/AW">
              &nbsp;
            </router-link>
            <router-link id="building-u" to="/building/U">
              &nbsp;
            </router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'CampusMap',

  components: {
    PageTitle
  },

  metaInfo () {
    return {
      title: 'Map'
    }
  }
}
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 960px) {
.map-container {
  max-width: calc(100vh - 220px * 990 / 1386);
  margin-left: 0;
  margin-right: 0;
}}

@media (min-aspect-ratio: 1/1) and (max-height: 550px) {
  .map-container {
    max-width: calc(69% - 65px);
  }
}

@media (min-aspect-ratio: 16/9) and (max-height: 550px) {
  .map-container {
    max-width: calc(54% - 65px);
  }
}

.map {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(990 / 1386 * 100%);
  background-image: url(~confassets/campus.png);
  background-size: 100% 100%;
}

.map a {
  position: absolute;
}

#building-k {
  top: 27%;
  left: 21.5%;
  width: 11.5%;
  height: 10%;
}

#building-j {
  top: 67.5%;
  left: 32%;
  width: 11%;
  height: 15.5%;
}

#building-h {
  top: 59%;
  left: 43.0%;
  width: 6.5%;
  height: 23%;
}

#building-aw {
  top: 65%;
  left: 53.5%;
  width: 6.5%;
  height: 9.5%;
}

#building-u {
  top: 43.5%;
  left: 51.5%;
  width: 26.5%;
  height: 11.5%;
}
</style>
