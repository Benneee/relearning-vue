<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData" />
    </base-card>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import CoachForm from '../../components/CoachForm.vue';
export default {
  components: { CoachForm },
  name: 'CoachRegistration',

  methods: {
    ...mapActions('coaches', ['registerCoach']),

    saveData(data) {
      this.registerCoach(data);
      this.$router.replace({ path: '/' });
    },
  },
};
</script>

<style scoped></style>
