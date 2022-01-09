export default {
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
      const error = new Error(responseData.message || 'Failed to send request');
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
};
