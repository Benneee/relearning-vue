<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button @click="activate('poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button @click="activate('average')" type="button">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button @click="activate('great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',

  data() {
    return {
      activeOption: null,
    };
  },

  methods: {
    activate(option) {
      this.activeOption = option;
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
