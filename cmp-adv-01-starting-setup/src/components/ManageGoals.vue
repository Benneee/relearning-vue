<template>
  <section>
    <h2>Manage Goals</h2>
    <input type="text" v-model="goal" />
    <button @click="setGoal">Set Goal</button>

    <error-alert v-if="inputIsInvalid">
      <h2>Input Is Invalid</h2>
      <p>Please enter at least a few characters</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </section>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  name: 'ManageGoals',

  components: {
    ErrorAlert,
  },

  data() {
    return {
      goal: '',
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      if (this.goal === '') {
        // alert('Input must not be empty');
        this.inputIsInvalid = true;
      }
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
