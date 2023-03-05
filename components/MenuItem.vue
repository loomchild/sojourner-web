<template>
  <v-list-item :to="to" :exact="to === '/'" :href="href" :target="href ? '_blank' : undefined" ripple @click.stop="$emit('click', $event.target)">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
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
