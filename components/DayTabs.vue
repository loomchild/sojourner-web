<template>
  <v-tabs class="days" slider-color="none" :value="tab" :color="$vuetify.breakpoint.smAndDown ? 'primary' : 'white'" :dark="$vuetify.breakpoint.smAndDown" @change="setTab">
    <slot></slot>
  </v-tabs>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DayTabs',

  computed: {
    ...mapGetters([
      'tab'
    ])
  },

  methods: {
    ...mapActions([
      'setTab'
    ])
  }

}
</script>

<style scoped>
</style>

<style>
/* Sometimes window height stays 0px (Vuetify bug?), forcing undefined height */
.v-tabs.days .v-window__container--is-active {
  height: unset !important;
}

.v-tabs.days .v-tabs__div {
  min-width: 140px;
}

.v-tabs.days .v-tabs__item {
  border-radius: 20px 20px 0px 0px;
  border-color: var(--v-secondary-base);
  border-width: 1px;
  border-style: solid;
  padding-left: 30px;
  padding-right: 30px;
  opacity: 1;
}

.v-tabs.days .v-tabs__item--active {
  background-color: var(--v-secondary-base);
  color: #ffffff;
}

</style>
