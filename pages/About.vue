<template>
  <v-container fluid class="content fill-height align-start align-md-center pa-4 pa-md-0">
    <v-row>
      <v-col>
        <page-title></page-title>
        <v-row>
          <v-col class="about-text grow">
            <p class="mb-2">
              <span>Schedule updated:</span>
              <span class="font-weight-medium">{{ lastModified }}</span>
            </p>
            <p class="mb-2">
              <span>Code updated:</span>
              <span class="font-weight-medium">{{ timestamp }}</span>
            </p>
            <p class="mb-2">
              <span>Version:</span>
              <span>
                <a :href="commiturl" target="_blank">{{ version }}</a>
                (<a href="https://github.com/loomchild/sojourner-web/blob/master/CHANGELOG.md" target="_blank">Changelog</a>)
              </span>
            </p>
            <p class="mb-2">
              <span>Code / Issues:</span>
              <span><a href="https://github.com/loomchild/sojourner-web" target="_blank">Github</a></span>
            </p>
            <p class="mb-2">
              <span>All editions:</span>
              <span v-for="(edition, index) in allConferenceEditions" :key="edition.id">
                <router-link :to="`/${edition.id}`">
                  {{ edition.id }}<span v-if="index < (allConferenceEditions.length - 1)">, </span>
                </router-link>
              </span>
            </p>
            <v-row>
              <v-col cols="12" sm="9" class="mt-2 md:mt-6 about-text">
                <p class="story">
                  Sojourner is a conference companion, developed by <a href="https://jareklipski.com" target="_blank">Jarek Lipski</a>.
                </p>
                <p class="story">
                  It's inspired by the FOSDEM schedule app written by <a href="https://willthompson.co.uk/" target="_blank">Will Thompson</a> for the Nokia N900 back in 2010, and discovered by Jarek during his first visit to ULB Solbosch Campus in 2012.
                </p>
                <p class="story">
                  <i>The N900's codename was Rover; Sojourner is a Mars rover. Naming it Sojourner seemed apt because a sojourn is a short trip and FOSDEM is 2 days long.</i>
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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

    ...mapGetters([
      'timestamp',
      'commithash',
      'version',
      'allConferenceEditions',
      'lastModified'
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
.v-application a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

p {
  line-height: 1.25;
}

.about-text {
  color: white;
  font-size: 16px;
  line-height: 1;
}

@media only screen and (min-width:960px) {
  .about-text {
    font-size: 20px;
  }
}

@media only screen and (max-width:959px) {
  .content {
    background-color: var(--v-primary-base);
  }
}

</style>
