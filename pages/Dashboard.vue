<template>
  <v-container v-if="$vuetify.breakpoint.smAndDown" fluid fill-height class="content pa-0">
    <v-layout row wrap>
      <v-flex v-for="type in types" :key="type.type.name" v-ripple="{class: 'white--text'}" xs12 grow d-flex :style="{backgroundColor: type.type.mobileColor}">
        <router-link :to="`/type/${type.type.name}`" class="d-flex">
          <article class="ma-auto">
            <h2>{{ type.type.name }}</h2>
            <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length }} {{ type.type.statName }}</footer>
          </article>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else fluid fill-height grid-list-xl class="content">
    <v-layout column>
      <v-flex xs6 class="mt-auto">
        <h1 class="page-title" :style="{ color: conferenceNameColor }">
          {{ conferenceName }}
        </h1>
        <v-layout row>
          <v-flex v-for="type in types" :key="type.type.name" v-ripple="{class: 'white--text'}" shrink>
            <router-link :to="`/type/${type.type.name}`" class="d-block">
              <article>
                <h2>{{ type.type.name }}</h2>
                <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length }} {{ type.type.statName }}</footer>
              </article>
              <div class="circle mx-auto mt-3" :style="{backgroundColor: type.type.desktopColor}">
              </div>
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',

  computed: {
    ...mapGetters({
      types: 'allTypeStats',
      conferenceName: 'conferenceName',
      conferenceNameColor: 'conferenceNameColor'
    })
  },

  metaInfo () {
    return {
      title: this.conferenceName
    }
  }
}
</script>

<style scoped>
.layout .flex {
  user-select: none;
}

.layout .flex a {
  text-decoration: none;
}

.layout .flex article {
  text-align: center;
  color: white;
}

.layout .flex article h2 {
  font-size: 38px;
  line-height: 46px;
  font-weight: lighter;
}

.layout .flex article footer {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  opacity: 0.7;
}

@media only screen and (min-width:960px) {
  .layout .flex {
    background-color: transparent !important;
  }

  .layout .flex article h2 {
    font-size: 26px;
    line-height: 31px;
    font-weight: normal;
  }

  .layout .flex article footer {
    margin-top: 6px;
  }

  .layout .flex .circle {
    height: 27px;
    width: 27px;
    border-radius: 50%;
  }
}
</style>

<style>
#app.application.root {
  background-image: url(~confassets/dashboard.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1.page-title {
  text-transform: none !important;
}

@media only screen and (min-width:960px) {
  #app.application.root {
    background-color: var(--v-primary-base) !important;
    background-image: url(~confassets/dashboard-desktop.png);
    background-size: 100%;
    background-position: right bottom;
  }
}
</style>
