<template>
  <v-list-tile @click="click">
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
  props: ['icon', 'title'],
  methods: {
    click: function () {
      this.$emit('click')
    }
  }
}
</script>

<style>
</style>

