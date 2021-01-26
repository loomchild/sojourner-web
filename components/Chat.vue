<template>
  <a v-if="event.exists && event.chat" :href="event.chat" target="_blank" class="chat">
    <v-icon color="secondary" title="Open Chat">
      question_answer
    </v-icon>
  </a>
</template>

<script>
export default {
  name: 'Chat',

  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.chat {
  text-decoration: none;
}

.chat i {
  font-size: 40px;
  font-weight: normal;
}
</style>
