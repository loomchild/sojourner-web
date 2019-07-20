<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex sm12 md6 offset-md3>
              <div class="infos body-2">
                <p><v-icon>book</v-icon> Version: <a :href="commiturl">{{ version }}</a></p>
                <p><v-icon>alarm</v-icon> Timestamp: {{ timestamp }}</p>
                <p><v-icon>fingerprint</v-icon> Author: <a href="https://studio.untitledfactory.com" target="_blank">Untitled Factory Studio</a></p>
                <p><v-icon>email</v-icon> Support: <a href="mailto:contact@untitledfactory.com?subject=Sojourner">contact@untitledfactory.com</a></p>
                <p><v-icon>code</v-icon> Code: <a href="https://github.com/loomchild/sojourner-web">Github</a></p>
                <p>Sojourner is a conference schedule viewer. It is inspired by the original <a href="https://github.com/loomchild/sojourner">Sojourner</a> mobile app for Nokia N900.</p>
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'about',

  computed: {
    commiturl () {
      return `https://github.com/loomchild/sojourner-web/commit/${this.commithash}`
    },

    ...mapGetters([
      'timestamp',
      'commithash',
      'version'
    ])
  },

  metaInfo () {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>
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
