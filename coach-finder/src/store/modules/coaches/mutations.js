export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },

  // Mutation to save fetched coaches in state
  setCoaches(state, payload) {
    state.coaches = payload;
  },

  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
