<template>
  <section>
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasRequests && !isLoading">
        <RequestItem
          v-for="request in requests"
          :key="request.id"
          :request="request"
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RequestItem from '../../components/requests/RequestItem';

export default {
  name: 'RequestsReceived',

  components: { RequestItem },

  data() {
    return {
      error: null,
      isLoading: false,
    };
  },

  computed: {
    ...mapGetters('requests', ['requests', 'hasRequests']),
  },

  created() {
    this.loadRequests();
  },

  methods: {
    ...mapActions('requests', ['getRequests']),

    async loadRequests() {
      this.isLoading = true;
      try {
        await this.getRequests();
      } catch (error) {
        this.error = error || 'Error in fetching requests';
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
