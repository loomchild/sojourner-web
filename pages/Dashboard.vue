<template>
  <v-container v-if="$vuetify.breakpoint.smAndDown" fluid class="content fill-height">
    <v-row class="flex-column fill-height ma-0">
      <v-col v-for="type in types" :key="type.type.name" class="grow pa-0 d-flex" :style="{backgroundColor: type.type.mobileColor}">
        <router-link v-ripple="{class: 'white--text'}" :to="`/type/${type.type.name}`" class="grow d-flex">
          <article class="ma-auto">
            <h2>{{ type.type.name }}</h2>
            <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length }} {{ type.type.statName }}</footer>
          </article>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else fluid class="content fill-height align-start">
    <v-row>
      <v-col>
        <h1 class="page-title mb-2" :style="{ color: conferenceNameColor }">
          {{ conferenceName }}
        </h1>
        <v-row>
          <v-col v-for="type in types" :key="type.type.name" class="shrink d-flex pa-1">
            <router-link v-ripple="{class: 'white--text'}" :to="`/type/${type.type.name}`" class="d-block pa-2">
              <article>
                <h2 class="nowrap">
                  {{ type.type.name }}
                </h2>
                <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length }} {{ type.type.statName }}</footer>
              </article>
              <div class="circle mx-auto mt-4" :style="{backgroundColor: type.type.desktopColor}">
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
.row .col {
  user-select: none;
}

.row .col a {
  text-decoration: none;
}

.row .col article {
  text-align: center;
  color: white;
}

.row .col article h2 {
  font-size: 38px;
  line-height: 46px;
  font-weight: lighter;
}

.row .col article footer {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  opacity: 0.7;
}

@media only screen and (min-width:960px) {
  .content > .row {
    margin-top: 50%;
  }

  .row .col {
    background-color: transparent !important;
  }

  .row .col article h2 {
    font-size: 26px;
    line-height: 31px;
    font-weight: normal;
  }

  .row .col article footer {
    margin-top: 6px;
  }

  .row .col .circle {
    height: 27px;
    width: 27px;
    border-radius: 50%;
  }
}
</style>

<style>
#app.layout-cover {
  background-image: url(~assets/dashboard.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1.page-title {
  text-transform: none !important;
}

@media only screen and (min-width:960px) {
  #app.layout-cover {
    background-color: var(--v-primary-base) !important;
    background-image: url(~assets/dashboard-desktop.png);
    background-size: 100%;
    background-position: right bottom;
  }
}
</style>
