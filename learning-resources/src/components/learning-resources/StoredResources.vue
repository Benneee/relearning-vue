<template>
  <ul>
    <LearningResourceItem
      v-for="resource in storedResources"
      :key="`resource-${resource.id}`"
      :resource="resource"
    />
  </ul>
</template>

<script>
import LearningResourceItem from '@/components/learning-resources/LearningResourceItem.vue';

export default {
  name: 'StoredResources',

  components: {
    LearningResourceItem,
  },

  props: {
    storedResources: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
