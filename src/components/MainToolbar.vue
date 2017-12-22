<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="click"></v-toolbar-side-icon>
    <v-toolbar-title>Sojourner</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'main-toolbar',
  methods: {
    click () {
      this.$eventBus.$emit('toggledrawer')
    }
  }
}
</script>

<style>
</style>


