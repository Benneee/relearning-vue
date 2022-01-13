<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  name: 'UserData',
  props: ['firstName', 'lastName'],

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

    // To use provide and inject:
    // this is the receiving component, so we import inject here
    // then pass in the same key as was used in the provider component
    const age = inject('userAge');
    // Also, you should only update an injected value in the component it was provided

    // For lifecycle hooks, you pass in a function expected to run during that particular life cycle
    onBeforeMount(() => console.log('onBeforeMount'));
    onMounted(() => console.log('onMounted'));
    onBeforeUpdate(() => console.log('onBeforeUpdate'));
    onUpdated(() => console.log('onUpdated'));
    onBeforeUnmount(() => console.log('onBeforeUnmount'));
    onUnmounted(() => console.log('onUnmounted'));

    return {
      userName,
      age,
    };
  },
};
</script>

<style></style>
