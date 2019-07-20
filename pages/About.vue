<template>
  <v-container v-if="$vuetify.breakpoint.smAndDown" fluid fill-height class="content">
    <v-layout row wrap>
      <v-layout row wrap>
        <v-flex sm12 md6 offset-md3>
          <div class="body-2">
            <p><v-icon>book</v-icon> Version: <a :href="commiturl">{{ version }}</a></p>
            <p><v-icon>alarm</v-icon> Timestamp: {{ timestamp }}</p>
            <p><v-icon>fingerprint</v-icon> Author: <a href="https://studio.untitledfactory.com" target="_blank">Untitled Factory Studio</a></p>
            <p><v-icon>email</v-icon> Support: <a href="mailto:contact@untitledfactory.com?subject=Sojourner">contact@untitledfactory.com</a></p>
            <p><v-icon>code</v-icon> Code: <a href="https://github.com/loomchild/sojourner-web">Github</a></p>
            <p>Sojourner is a conference schedule viewer. It is inspired by the original <a href="https://github.com/loomchild/sojourner">Sojourner</a> mobile app for Nokia N900.</p>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
  <v-container v-else fluid fill-height grid-list-xl class="content px-3">
    <v-layout column>
      <v-flex lg6 xs7 class="mt-auto">
        <h1 class="page-title">About</h1>
        <v-layout row wrap>
          <v-flex xs12 class="headline">
            <p class="mb-1">
              <span class="secondary--text">Author:</span>
              <span class="white--text"><a href="https://studio.untitledfactory.com" target="_blank">Untitled Factory Studio</a></span>
            </p>
            <p class="mb-1">
              <span class="secondary--text">Support:</span>
              <span class="white--text"><a href="mailto:contact@untitledfactory.com?subject=Sojourner">contact@untitledfactory.com</a></span>
            </p>
            <p class="mb-1">
              <span class="secondary--text">Version:</span>
              <span class="white--text"><a :href="commiturl">{{ version }} / {{ timestamp }}</a></span>
            </p>
            <p class="mb-1">
              <span class="secondary--text">Code:</span>
              <span class="white--text"><a href="https://github.com/loomchild/sojourner-web">Github</a></span>
            </p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs9 class="title font-weight-regular pt-0">
            <p class="secondary--text story">Sojourner is a conference companion. It is inspired by the original <a href="https://github.com/loomchild/sojourner">Sojourner</a> mobile app for Nokia N900.</p>
          </v-flex>
        </v-layout>
      </v-flex>
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
a {
  text-decoration: none;
  color: inherit;
}

.story {
  line-height: 2rem;
}

.story a {
  font-weight: 600;
}
</style>

<style>
.application.about {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media only screen and (min-width:960px) {
  .application.about {
    background-color: var(--v-primary-base) !important;
    background-image: url(~assets/dashboard-desktop.png);
    background-size: 33%;
    background-position: right bottom;
  }
}
</style>

