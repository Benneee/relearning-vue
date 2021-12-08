<template>
  <base-card>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </template>
    <template>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
import BaseBadge from './BaseBadge.vue';
import BaseCard from './BaseCard.vue';
export default {
  name: 'UserInfo',
  components: {
    BaseBadge,
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
