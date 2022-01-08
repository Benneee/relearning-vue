export default {
  namespaced: true,

  state() {
    return {
      // each request will contain a coachId, if a loggedIn coachId's
      // request is found here, that's the request the loggedIn coach will be seeing
      requests: [],
    };
  },

  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },

  getters: {
    requests(state) {
      return state.requests;
    },

    hasRequests(state) {
      return state.requests && state.requests.length > 0;
    },
  },

  actions: {
    contactCoach(context, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        message: payload.message,
      };

      context.commit('addRequest', newRequest);
    },
  },
};
