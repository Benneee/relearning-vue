<template>
      <h3> {{ finalCounter }} </h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TheCounter',
        
    computed: {
        // counter() {
        //     return this.$store.getters.finalCounter;
        // }

        // This grants the component access to the finalCounter getter immediately
        ...mapGetters(['finalCounter'])
    },
}
</script>

<style>

</style>