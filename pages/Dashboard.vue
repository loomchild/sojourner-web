<template>
  <v-container id="dashboard" fluid fill-height>
    <v-layout row wrap>
      <v-flex v-for="type in types" :key="type.name" xs12 grow v-ripple v-go="`/type/${type.name}`">
        <div>{{ type.name }}</div>
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
  background-color: #ff000099;
}

.layout .flex:nth-last-child(2) {
  background-color: #CCB19499;
}

.layout .flex:nth-last-child(1) {
  background-color: #633D5C99;
}

.layout .flex div {
  margin: auto;
  text-align: center;
  font-size: 38px;
  font-family: 'Rubik';
  font-weight: lighter;
}
</style>



