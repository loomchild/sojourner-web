<template>
  <header class="hidden-sm-and-down">
    <button v-if="backArrow" :style="{color : buttonColor}" @click.stop="goBack">◂</button> 
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'page-title',

  props: {
    backArrow: String
  },

  computed: {
    buttonColor () {
      if (!this.backArrow) {
        return
      }
      if (this.backArrow.startsWith('#')) {
        return this.backArrow
      }
      if (!this.backArrow.includes('-')) {
        return `var(--v-${this.backArrow}-base)`
      }
      return `var(--v-${this.backArrow})`
    },

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
  color: var(--v-secondary-base);
  position: relative;
  float: left;
  margin-right: 20px;
  margin-top: -3px;
}

@media only screen and (min-width:1080px) {
  button {
    margin-right: 0;
    margin-left: -50px;
  }
}
</style>
