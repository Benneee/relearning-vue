<template>
  <section>
    Details for Coach
    <router-view></router-view>
    <router-link to="/coaches/c1/contact">Contact</router-link>
  </section>
</template>

<script>
export default {
  name: 'CoachDetails',
};
</script>

<style></style>
