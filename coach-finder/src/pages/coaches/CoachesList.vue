<template>
  <section>
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <CoachFilter @change-filter="setFilters" />

    <div>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
          <base-button link to="/register" v-if="!isCoach && !isLoading"
            >Register as coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
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
import { mapGetters, mapActions } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from './CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  name: 'CoachesList',

  data() {
    return {
      isLoading: false,
      error: null,
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

  created() {
    this.loadCoaches();
  },

  methods: {
    ...mapActions('coaches', ['getCoaches']),

    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.getCoaches();
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
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
