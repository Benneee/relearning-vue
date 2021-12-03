<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    />
  </ul>
</template>

<script>
import KnowledgeElement from './KnowledgeElement.vue';
export default {
  name: 'KnowledgeGrid',

  components: {
    KnowledgeElement,
  },

  inject: ['topics'],
  emits: ['select-topic'],
};
</script>
