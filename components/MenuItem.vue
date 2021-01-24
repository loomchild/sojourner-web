<template>
  <v-list-tile :to="to" :exact="to === '/'" :href="href" :target="href ? '_blank' : undefined" ripple @click.stop="$emit('click', $event.target)">
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
  name: 'MenuItem',

  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
</style>
