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

    setRequests(state, payload) {
      state.requests = payload;
    },
  },

  getters: {
    requests(state, _, _2, rootGetters) {
      const coachId = rootGetters.userId;
      return state.requests.filter((req) => req.coachId === coachId);
    },

    hasRequests(state, getters) {
      return getters.requests && getters.requests.length > 0;
    },
  },

  actions: {
    async contactCoach(context, payload) {
      const newRequest = {
        userEmail: payload.email,
        message: payload.message,
      };

      const response = await fetch(
        `https://coach-finder-5bd90-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest),
        },
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to send request',
        );
        throw error;
      } else {
        context.commit('addRequest', {
          ...newRequest,
          id: responseData.name, // Firebase generates an ID and adds it to a "name" field
          coachId: payload.coachId,
        });
      }
    },

    async getRequests(context) {
      const coachId = context.rootGetters.userId;
      const response = await fetch(
        `https://coach-finder-5bd90-default-rtdb.firebaseio.com/requests/${coachId}.json`,
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to fetch requests',
        );
        throw error;
      } else {
        const requests = [];

        for (const key in responseData) {
          const request = {
            id: key,
            coachId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message,
          };
          requests.push(request);
        }

        context.commit('setRequests', requests);
      }
    },
  },
};
