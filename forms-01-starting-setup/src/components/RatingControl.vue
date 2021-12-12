<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="activate('poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button @click="activate('average')" type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button @click="activate('great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',

  // Vue tracks changes on a custom form-control using modelValue
  props: ['modelValue'],

  // The event vue waits for when tracking a custom form control
  emits: ['update:modelValue'],

  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },

  //   computed: {
  //     activeOption() {
  //         return this.modelValue
  //     }
  //   },

  methods: {
    activate(option) {
      //   this.activeOption = option;
      //   To return the selected option when any of the buttons is clicked/selected, we emit the 'update:modelValue' event so that Vue knows that a value has been selected from the options
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgb(202, 34, 202);
}

.active button {
  color: rgb(202, 34, 202);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
