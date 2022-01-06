<template>
  <section>
    <div>Filter</div>
    <div>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register">Register as coach </base-button>
        </div>
        <ul v-if="hasCoaches">
          <CoachItem v-for="coach in coaches" :key="coach.id" :coach="coach" />
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
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
