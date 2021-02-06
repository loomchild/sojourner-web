<template>
  <v-container fluid fill-height class="content">
    <v-layout column>
      <v-flex shrink>
        <page-title></page-title>
      </v-flex>
      <v-flex grow class="about-text">
        <p class="mb-2">
          <span>Author:</span>
          <span><a href="https://jareklipski.com" target="_blank">Jarek Lipski</a></span>
        </p>
        <p class="mb-2">
          <span>Updated:</span>
          <span>{{ timestamp }}</span>
        </p>
        <p class="mb-2">
          <span>Version:</span>
          <span><a :href="commiturl" target="_blank">{{ version }}</a></span>
        </p>
        <p class="mb-2">
          <span>Code / Issues:</span>
          <span><a href="https://github.com/loomchild/sojourner-web" target="_blank">Github</a></span>
        </p>
        <p v-if="previousEditionList" class="mb-2">
          <span>Previous editions:</span>
          <span v-for="(edition, index) in previousEditionList" :key="edition.label">
            <a :href="edition.link" target="_blank">
              {{ edition.label }}<span v-if="index < (previousEditionList.length - 1)">, </span>
            </a>
          </span>
        </p>
        <v-layout row>
          <v-flex xs12 sm9 class="mt-4 about-text">
            <p class="story">
              Sojourner is a conference companion. It is inspired by the original Sojourner mobile app for Nokia N900.
            </p>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="mt-4 about-text">
            <v-btn @click="update">
              Check for updates
            </v-btn>
            <br />
            .
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'About',

  components: {
    PageTitle
  },

  computed: {
    commiturl () {
      return `https://github.com/loomchild/sojourner-web/commit/${this.commithash}`
    },

    previousEditionList () {
      if (!this.previousEditions) {
        return null
      }
      const list = Object.entries(this.previousEditions).map(([key, value]) => ({ label: key.toString(), link: value }))
      list.sort((l, r) => r.label.localeCompare(l.label))
      return list
    },

    ...mapGetters([
      'timestamp',
      'commithash',
      'version',
      'previousEditions'
    ])
  },

  methods: {
    async update () {
      const registrations = await navigator.serviceWorker.getRegistrations()
      for (const registration of registrations) {
        registration.update()
      }
    }
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
  font-weight: 500;
}

.story {
  line-height: 1.5;
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
  background-image: url(~confassets/dashboard-desktop.png);
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
