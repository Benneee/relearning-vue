<template>
  <section>
    <TheHeader />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import TheHeader from './components/layout/TheHeader.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
  },

  computed: {
    ...mapGetters(['isAutoLoggedOut']),
  },

  created() {
    this.tryLogin();
  },

  // Redirect the user to the coaches page if auto-logged out
  watch: {
    isAutoLoggedOut(currValue, oldValue) {
      if (currValue && currValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },

  methods: {
    ...mapActions(['tryAutoLogin']),

    tryLogin() {
      this.tryAutoLogin();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
