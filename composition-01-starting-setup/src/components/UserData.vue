<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'UserData',
  props: ['firstName', 'lastName', 'age'],

  //   To work with props in setup
  setup(props) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    return {
      userName,
    };
  },
};
</script>

<style></style>
