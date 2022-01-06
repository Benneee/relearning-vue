<template>
  <section>
    <div>Filter</div>
    <div>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as coach </router-link>
      </div>
      <ul>
        List of coaches
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoachesList',
};
</script>

<style scoped></style>
