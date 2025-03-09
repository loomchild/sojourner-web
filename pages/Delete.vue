<template>
  <v-container fluid class="content fill-height align-start align-md-center pa-4 pa-md-0">
    <v-row>
      <v-col>
        <page-title></page-title>
        <v-row>
          <v-col>
            To delete your account and all associated favourites, please send an email to
            <a href="mailto:hello@jareklipski.com">hello@jareklipski.com</a> and you will receive further instructions.
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'Delete',

  components: {
    PageTitle
  },

  metaInfo () {
    return {
      title: 'Delete your Sojourner account'
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
