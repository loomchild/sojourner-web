<template>
  <header class="hidden-sm-and-down">
    <button @click.stop="goBack">◂</button> 
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'page-title',

  computed: {
    ...mapGetters([
      'title'
    ])
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
header {
  margin-top: 120px;
  margin-bottom: 2rem;
}

header, h1 {
  font-size: 60px;
  font-family: 'Roboto Condensed', Arial;
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  color: var(--v-secondary-base);
}

button {
  position: relative;
  float: left;
  width: 60px;
  margin-left: -65px;
  margin-top: -3px;
}
</style>
