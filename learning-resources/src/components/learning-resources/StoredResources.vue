<template>
  <ul>
    <LearningResourceItem
      v-for="resource in resources"
      :key="`resource-${resource.id}`"
      :resource="resource"
    />
  </ul>
</template>

<script>
import LearningResourceItem from '@/components/learning-resources/LearningResourceItem.vue';

export default {
  name: 'StoredResources',

  inject: ['resources'],

  components: {
    LearningResourceItem,
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
