<template>
<section>
  <base-container title="Vuex" v-if="isLoggedInState">
    <TheCounter />
    <FavouriteValue />
    <button @click="increase({ value: 10})">Add 20</button>
    <ChangeCounter />
  </base-container>

  <base-container title="auth">
    <UserAuth />
  </base-container>
</section>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },

  computed: {
    ...mapGetters(['isLoggedInState'])
  },

  methods: {
    ...mapActions('numbers', ['increase']),

    // addOne() {
        // this.$store.commit('increase', { value: 10 })
        // this.$store.commit({
        //   type: 'increase',
        //   value: 10
        // })

        // To use actions, we call dispatch
        // this.$store.dispatch({
        //   type: 'increase',
        //   value: 10
        // })
    // }
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