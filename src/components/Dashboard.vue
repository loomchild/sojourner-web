<template>
  <div class="dashboard">
    <section id="logo">
      <img id="logo" src="../assets/logo.png">
    </section>
    <section id="menu">
      <div class="md-layout md-alignment-center">
        <md-button class="md-raised md-primary md-layout-item">All events</md-button> 
        <md-button class="md-raised md-primary md-layout-item">Events by track</md-button> 
        <md-button class="md-raised md-primary md-layout-item">Events by room</md-button> 
        <md-button class="md-raised md-primary md-layout-item">Favourite events</md-button> 
      </div>
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
  .dashboard {
    text-align: center;
  }

  #logo {
    margin: 10px 0;
  }

  #menu {
    width: 400px;
    margin: 0 auto;
  }

  .md-button {
    min-width: 150px;
  }
</style>

