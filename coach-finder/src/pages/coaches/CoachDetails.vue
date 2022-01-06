<template>
  <section>
    <div>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h4>${{ rate }}/hour</h4>
      </base-card>
    </div>

    <div>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </div>

    <div>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :title="area"
          :type="area"
        >
        </base-badge>
        <p>{{ description }}</p>
      </base-card>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CoachDetails',

  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },

  data() {
    return {
      selectedCoach: null,
    };
  },

  computed: {
    ...mapGetters('coaches', ['coaches']),

    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },

    contactLink() {
      return `${this.$route.path}/contact`;
    },

    areas() {
      return this.selectedCoach.areas;
    },

    rate() {
      return this.selectedCoach.hourlyRate;
    },

    description() {
      return this.selectedCoach.description;
    },
  },

  created() {
    this.getSelectedCoach();
  },

  methods: {
    getSelectedCoach() {
      if (this.coaches.length > 0) {
        this.selectedCoach = this.coaches.find((coach) => coach.id === this.id);
      }
    },
  },
};
</script>

<style></style>
