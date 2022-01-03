<template>
    <section>
        <h3> {{ counter }} </h3>
        <p>We do more...</p>
    </section>

</template>

<script>
export default {
    name: 'FavouriteValue',

    computed: {
        counter() {
            // return this.$store.getters.normalizedCounter;
            return this.$store.getters['numbers/normalizedCounter'];
        }
    }
}
</script>

<style>

</style>