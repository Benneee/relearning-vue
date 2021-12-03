<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid @select-topic="$emit('select-topic', $event)" />
  </section>
</template>

<script>
import KnowledgeGrid from './KnowledgeGrid.vue';

export default {
  name: 'KnowledgeBase',
  components: {
    KnowledgeGrid,
  },
  emits: ['select-topic'],
};
</script>
