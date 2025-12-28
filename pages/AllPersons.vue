<template>
  <v-container fluid class="content">
    <page-title></page-title>
    <div>
      <div v-if="allPersonsByLetter.length > 0" class="letter">
        <div v-for="personGroup of allPersonsByLetter" :key="`letter-${personGroup[0].firstLetter}`">
          <h2 class="pl-4 mt-6 mb-2">
            {{ personGroup[0].firstLetter }}
          </h2>
          <v-list class="pa-0">
            <template v-for="(person, index) in personGroup">
              <v-list-item :key="person.id" :ripple="false" class="person pr-0" :to="{ name: 'person', params: { personId: person.id } }">
                <v-list-item-content class="align-content-center">
                  {{ person.name }}
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="index + 1 < personGroup.length" :key="`person-${person.id}`"></v-divider>
            </template>
          </v-list>
        </div>
      </div>
      <v-list v-else>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              There are no speakers on this list.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import PageTitle from '@/components/PageTitle'

export default {
  name: 'AllSpeakers',

  components: {
    PageTitle
  },

  props: {
  },

  computed: {
    ...mapGetters([
      'allPersonsByLetter'
    ])
  },

  metaInfo () {
    return {
      title: 'Speakers'
    }
  }
}
</script>

<style scoped>
.v-list {
  border: 1px solid #0000001e !important;
}

h2 {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1em;
  font-family: 'Roboto Condensed', sans-serif;
  color: var(--v-secondary-base);
}
</style>
