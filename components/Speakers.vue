<template>
  <div class="speakers grey--text">
    <span v-for="person in persons">
      <router-link v-if="person.exists" :to="{ name: 'person', params: { personId: person.id } }" class="grey--text text-decoration-none">{{ person.name }}</router-link>
      <template v-else>{{ person.name }}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Speakers',

  props: {
    persons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width:960px) {
  .speakers {
    font-size: 18px;
  }
}

.speakers {
  span {
  }

  span:not(:last-child) {
    &::after {
      content: ", ";
    }
  }
}
</style>

