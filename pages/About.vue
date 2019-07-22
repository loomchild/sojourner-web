<template>
  <v-container fluid fill-height class="content">
    <v-layout column>
      <v-flex shrink>
        <page-title></page-title>
      </v-flex>
      <v-flex grow class="about-text">
        <p class="mb-2">
          <span>Author:</span>
          <span><a href="https://studio.untitledfactory.com" target="_blank">Untitled Factory Studio</a></span>
        </p>
        <p class="mb-2">
          <span>Support:</span>
          <span><a href="mailto:contact@untitledfactory.com?subject=Sojourner">contact@untitledfactory.com</a></span>
        </p>
        <p class="mb-2">
          <span>Version:</span>
          <span><a :href="commiturl">{{ version }}</a></span>
        </p>
        <p class="mb-2">
          <span>Updated:</span>
          <span>{{ timestamp }}</span>
        </p>
        <p class="mb-2">
          <span>Code:</span>
          <span><a href="https://github.com/loomchild/sojourner-web">Github</a></span>
        </p>
        <v-layout row>
          <v-flex xs12 sm9 class="mt-4 about-text">
            <p class="story">Sojourner is a conference companion. It is inspired by the original <a href="https://github.com/loomchild/sojour
    ner">Sojourner</a> mobile app for Nokia N900.</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'about',

  components: {
    PageTitle
  },

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

.content > .layout {
  padding-left: 16px;
  padding-right: 16px;
}

.about-text {
  color: white;
  font-size: 16px;
  line-height: 1;
}

@media only screen and (min-width:960px) {
  .content > .layout {
    padding: 0;
  }

  .about-text {
    font-size: 20px;
  }
}
</style>

<style>
.application.about {
  background-color: var(--v-primary-base) !important;
  background-image: url(~assets/dashboard-desktop.png);
  background-size: 100%;
  background-position: right bottom;
  background-repeat: no-repeat;
}

@media (min-width:960px), (max-height:600px) {
  .application.about {
    background-size: 33%;
  }
}
</style>
