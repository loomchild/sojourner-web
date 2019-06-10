<template>
  <img v-if="analyticsImageUrl" :src="analyticsImageUrl" class="pixel" style="border:0" alt="" />
</template>

<script>
import config from '@/config'

export default {
  name: 'analytics',

  data: () => ({
    analyticsImageUrl: config.analyticsUrl
  })
}
</script>

<style>
.pixel {
  border: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
</style>
