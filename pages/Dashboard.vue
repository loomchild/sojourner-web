<template>
  <v-container v-if="$vuetify.breakpoint.smAndDown" fluid fill-height class="pa-0">
    <v-layout row wrap>
      <v-flex v-for="type in types" :key="type.type.name" xs12 grow v-ripple="{class: 'white--text'}" d-flex v-go="`/type/${type.type.name}`">
        <article class="ma-auto">
          <h2>{{ type.type.name }}</h2>
          <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length}} {{ type.type.statName }}</footer>
        </article>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else fluid fill-height grid-list-xl class="px-3">
    <v-layout column>
      <v-flex lg6 xs7 class="mt-auto">
        <h1>FOSDEM{{ year }} Program</h1>
        <v-layout row>
          <v-flex v-for="type in types" :key="type.type.name" shrink v-ripple="{class: 'white--text'}" v-go="`/type/${type.type.name}`">
            <article>
              <h2>{{ type.type.name }}</h2>
              <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length}} {{ type.type.statName }}</footer>
            </article>
            <div class="circle mx-auto mt-3"> </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'dashboard',

  computed: {
    year () {
      return this.conferenceYear ? `'${this.conferenceYear.substring(2)}` : ''
    },

    ...mapGetters({
      types: 'allTypeStats',
      conferenceYear: 'conferenceYear'
    })
  },

  metaInfo () {
    return {
      title: ''
    }
  }
}
</script>

<style scoped>
.layout .flex {
  cursor: pointer;
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

.layout .flex:nth-child(1),
.layout .layout .flex:nth-child(1) .circle {
  background-color: #508F8999;
}

.layout .flex:nth-child(2),
.layout .layout .flex:nth-child(2) .circle {
  background-color: #519BA699;
}

.layout .flex:nth-child(3),
.layout .layout .flex:nth-child(3) .circle {
  background-color: #6aacb699;
}

.layout .flex:nth-last-child(2),
.layout .layout .flex:nth-last-child(2) .circle {
  background-color: #CCB19499;
}

.layout .flex:nth-last-child(1),
.layout .layout .flex:nth-last-child(1) .circle {
  background-color: #633D5C99;
}

@media only screen and (min-width:960px) {
  .container {
    max-width: 960px;
  }

  .layout .flex {
    background-color: transparent !important;
    cursor: default;
  }

  .layout .layout .flex {
    cursor: pointer;
  }

  .layout .flex h1 {
    font-size: 80px;
    line-height: 1em;
    font-family: 'Roboto Condensed', Arial;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--v-secondary-base);
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
