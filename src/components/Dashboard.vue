<template>
  <div class="dashboard">
    <section id="logo">
      <img id="logo" src="../assets/logo.png">
    </section>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      message: 'Welcome to Sojourner'
    }
  }
}
</script>

<style scoped>
  #logo {
    text-align: center;
    margin: 10px 0;
  }
</style>

