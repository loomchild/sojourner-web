<template>
  <v-layout row wrap>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="logo">
              <a href="https://fosdem.org"><img src="../assets/logo.png"></a>
            </div>
          </v-flex>
          <v-flex sm12 md6 offset-md3>
            <div class="infos body-2">
              <p><v-icon>book</v-icon> Version: <a :href="commiturl">{{ commithash }}</a></p>
              <p><v-icon>alarm</v-icon> Timestamp: {{ timestamp }}</p>
              <p><v-icon>fingerprint</v-icon> Author: <a href="https://loomchild.net">loomchild</a></p>
              <p><v-icon>code</v-icon> Code / Feedback: <a href="https://github.com/loomchild/sojourner-web">Github</a></p>
              <p>Sojourner is a conference schedule viewer. It is inspired by the original <a href="https://github.com/loomchild/sojourner">Sojourner</a> mobile app for Nokia N900 written by Will Thompson.</p>
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import config from '../../config'

export default {
  name: 'about',
  data: () => ({
    version: config.version,
    commithash: config.commithash,
    commiturl: `https://github.com/loomchild/sojourner-web/commit/${config.commithash}`,
    timestamp: config.timestamp
  })
}
</script>

<style>
  .v-card {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  .logo {
    text-align: center;
  }

  .infos p {
    margin-bottom: 7px;
  }
</style>


