<template>
    <button @click="addTwo">Add 2</button>
</template>

<script>
export default {
    name: 'ChangeCounter',

    methods: {
        addTwo() {
            this.$store.dispatch('increment')
        }
    }
}
</script>

<style>

</style>