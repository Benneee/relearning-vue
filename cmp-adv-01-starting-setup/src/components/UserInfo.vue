<template>
  <base-card>
    <header>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </header>
    <p>{{ infoText }}</p>
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
