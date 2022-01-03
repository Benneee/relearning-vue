<template>
    <section>
            <button @click="increment">Add 2</button>
            <button @click="increaseBy(11)">Add 11</button>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ChangeCounter',

    methods: {
        // addTwo() {
        //     this.$store.dispatch('increment')
        // }

        ...mapActions('numbers', ['increment', 'increase']),

        increaseBy(amount) {
            return this.increase({ value: amount })
             
        }
    }
}
</script>

<style>

</style>