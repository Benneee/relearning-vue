<template>
  <section>
    <CoachFilter @change-filter="setFilters" />
    <div>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register" v-if="!isCoach"
            >Register as coach
          </base-button>
        </div>
        <ul v-if="hasCoaches">
          <CoachItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :coach="coach"
          />
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from './CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  name: 'CoachesList',

  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches', 'isCoach']),

    filteredCoaches() {
      return this.coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
