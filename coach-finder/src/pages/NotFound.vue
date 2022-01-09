<template>
  <section>
    <base-card>
      <h2>Page Not Found</h2>
      <p>
        You seem lost, please, find your way to our
        <router-link to="/coaches">coaches</router-link> page
      </p>
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style></style>
