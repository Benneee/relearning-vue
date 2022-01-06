<template>
  <section>
    <div>Filter</div>
    <div>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as coach </router-link>
      </div>
      <ul v-if="hasCoaches">
        List of coaches
        <li v-for="coach of filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No coaches found</h3>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CoachesList',

  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),

    filteredCoaches() {
      return this.coaches;
    },
  },
};
</script>

<style scoped></style>
