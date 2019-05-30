<template>
  <v-container id="dashboard" fluid fill-height>
    <v-layout row wrap>
      <v-flex v-for="type in types" :key="type.type.name" xs12 grow v-ripple v-go="`/type/${type.type.name}`">
        <article>
          <section>{{ type.type.name }}</section>
          <footer>{{ type.tracks.length > 1 ? type.tracks.length : type.events.length}} {{ type.type.statName }}</footer>
        </article>
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

.layout .flex {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.layout .flex:nth-child(1) {
  background-color: #508F8999;
}

.layout .flex:nth-child(2) {
  background-color: #519BA699;
}

.layout .flex:nth-child(3) {
  /* TODO */
  background-color: #6aacb699;
}

.layout .flex:nth-last-child(2) {
  background-color: #CCB19499;
}

.layout .flex:nth-last-child(1) {
  background-color: #633D5C99;
}

.layout .flex article {
  margin: auto;
  text-align: center;
  font-family: 'Rubik';
}

.layout .flex article section {
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
</style>



