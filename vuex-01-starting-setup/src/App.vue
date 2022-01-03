<template>
  <base-container title="Vuex">
    <TheCounter />
    <FavouriteValue />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue
  },

  methods: {
    addOne() {
        // this.$store.commit('increase', { value: 10 })
        // this.$store.commit({
        //   type: 'increase',
        //   value: 10
        // })

        // To use actions, we call dispatch
        this.$store.dispatch({
          type: 'increase',
          value: 10
        })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>