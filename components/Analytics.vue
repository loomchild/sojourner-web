<template>
  <img v-if="analyticsImageUrl" :src="analyticsImageUrl" style="border:0" alt="" />
</template>

<script>
import config from '../config'

export default {
  name: 'analytics',

  data: () => ({
    analyticsImageUrl: config.analyticsUrl
  })
}
</script>

<style>
</style>
