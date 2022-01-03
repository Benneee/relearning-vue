<template>
  <section>
      <button @click="logUserIn" v-if="!isLoggedInState">Log in</button>
      <button @click="logUserOut" v-if="isLoggedInState">Log out</button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'UserAuth',

    computed: {
        ...mapGetters(['isLoggedInState'])
    },

    methods: {
        ...mapActions(['logUserIn', 'logUserOut'])
    }
}
</script>

<style>

</style>