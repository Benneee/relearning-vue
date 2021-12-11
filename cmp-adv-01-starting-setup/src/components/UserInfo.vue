<template>
  <base-card>
    <template #header>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </template>
    <template #default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';
import BaseCard from './base/BaseCard.vue';
export default {
  name: 'UserInfo',
  components: {
    BaseBadge,
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>
