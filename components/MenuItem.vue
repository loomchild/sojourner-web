<template>
  <v-list-tile :to="to" :exact="to === '/'" @click.stop="$emit('click', $event.target)" ripple>
    <v-list-tile-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'menu-item',
  props: ['icon', 'title', 'to']
}
</script>

<style scoped>
</style>

