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
        <CoachItem v-for="coach in coaches" :key="coach.id" :coach="coach" />
      </ul>
      <h3 v-else>No coaches found</h3>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: { CoachItem },
  name: 'CoachesList',

  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),

    filteredCoaches() {
      return this.coaches;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
