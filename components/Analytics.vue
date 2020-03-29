<template>
  <img v-if="analyticsImageUrl" :src="analyticsImageUrl" class="pixel" style="border:0" alt="" />
</template>

<script>
export default {
  name: 'Analytics',

  data: () => ({
    analyticsImageUrl: process.env.ANALYTICS_URL
  })
}
</script>

<style scoped>
.pixel {
  border: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
</style>
