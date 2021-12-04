<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid />
  </section>
</template>

<script>
import KnowledgeGrid from './KnowledgeGrid.vue';

export default {
  name: 'KnowledgeBase',
  components: {
    KnowledgeGrid,
  },
};
</script>
