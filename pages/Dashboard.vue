<template>
  <v-container v-if="$vuetify.breakpoint.xsOnly" id="dashboard" fluid fill-height>
    <v-layout row wrap>
      <v-flex v-for="type in types" :key="type.type.name" xs12 grow v-ripple d-flex v-go="`/type/${type.type.name}`">
        <article>
          <h2>{{ type.type.name }}</h2>
          <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length}} {{ type.type.statName }}</footer>
        </article>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else id="dashboard" fluid fill-height grid-list-xl>
    <v-layout column>
      <v-spacer></v-spacer>
      <v-flex xs6>
        <h1>FOSDEM'19 Program</h1>
        <v-layout row>
          <v-flex v-for="type in types" :key="type.type.name" shrink v-ripple v-go="`/type/${type.type.name}`">
            <article>
              <h2>{{ type.type.name }}</h2>
              <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length}} {{ type.type.statName }}</footer>
            </article>
            <div class="circle"> </div>
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
    ...mapGetters({
      types: 'allTypeStats'
    })
  },

  metaInfo () {
    return {
      title: ''
    }
  }
}
</script>

<style>
#dashboard {
  padding: 0;
  background-image: url(~assets/dashboard.jpg);
  background-size: cover;
  background-position: center;
}

#dashboard .layout .flex {
  cursor: pointer;
}

#dashboard .layout .flex article {
  margin: auto;
  text-align: center;
  color: white;
}

#dashboard .layout .flex article h2 {
  font-size: 38px;
  line-height: 46px;
  font-weight: lighter;
}

#dashboard .layout .flex article footer {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  opacity: 0.7;
}

#dashboard .layout .flex:nth-child(1),
#dashboard .layout .layout .flex:nth-child(1) .circle {
  background-color: #508F8999;
}

#dashboard .layout .flex:nth-child(2),
#dashboard .layout .layout .flex:nth-child(2) .circle {
  background-color: #519BA699;
}

#dashboard .layout .flex:nth-child(3),
#dashboard .layout .layout .flex:nth-child(3) .circle {
  background-color: #6aacb699;
}

#dashboard .layout .flex:nth-last-child(2),
#dashboard .layout .layout .flex:nth-last-child(2) .circle {
  background-color: #CCB19499;
}

#dashboard .layout .flex:nth-last-child(1),
#dashboard .layout .layout .flex:nth-last-child(1) .circle {
  background-color: #633D5C99;
}

@media only screen and (min-width:600px) {
  #dashboard {
    background-image: none;
    max-width: 960px;
    padding-left: 16px;
    padding-right: 16px;
  }

  #dashboard .layout .flex {
    background-color: transparent !important;
    margin-top: auto;
    cursor: default;
  }

  #dashboard .layout .layout .flex {
    cursor: pointer;
  }

  #dashboard .layout .flex h1 {
    font-size: 80px;
    line-height: 1em;
    font-family: 'Roboto Condensed', Arial;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--v-secondary-base);
  }

  #dashboard .layout .flex article h2 {
    font-size: 26px;
    line-height: 31px;
    font-weight: normal;
  }

  #dashboard .layout .flex article footer {
    margin-top: 6px;
  }

  #dashboard .layout .flex .circle {
    display: block;
    height: 27px;
    width: 27px;
    border-radius: 50%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
