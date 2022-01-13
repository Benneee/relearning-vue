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
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    // context contains 3 properties
    console.log('context: ', context);
    // attrs => contains any fallthrough attributes from wherever `UserData component is used
    // slots => contains all the slots available in this component, if any
    // emit => a method we can use to emit custom events from this component within setup

    return {
      userName,
    };
  },
};
</script>

<style></style>
