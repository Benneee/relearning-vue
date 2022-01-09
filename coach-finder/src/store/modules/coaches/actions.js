export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coach = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // Right here after the data is created, we should send an HTTP request to
    // create it on the back-end, before saving it to the store, dependent on the
    // outcome of the HTTP communication

    // So Instead of sending the coach data to a general pool of coaches data,
    // we send it to a personalised column for the coach which is marked by the coach's userId
    const coachResponse = await fetch(
      `https://coach-finder-5bd90-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT', // If this data already exists in the DB, It'll be overwritten, if not, create it
        body: JSON.stringify(coach),
      },
    );
    // const coachData = await coachResponse.json();
    if (!coachResponse.ok) {
      console.log('error occurred');
    } else {
      context.commit('registerCoach', {
        ...coach,
        id: userId,
      });
    }
  },

  async getCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const coachesRequest = await fetch(
      'https://coach-finder-5bd90-default-rtdb.firebaseio.com/coaches.json',
    );
    const coachesData = await coachesRequest.json();

    if (!coachesRequest.ok) {
      console.log('error occurred');
      const error = new Error(coachesData.message || 'Failed to fetch');
      throw error;
    } else {
      const coaches = [];

      for (const key in coachesData) {
        const coach = {
          firstName: coachesData[key].firstName,
          lastName: coachesData[key].lastName,
          description: coachesData[key].description,
          hourlyRate: coachesData[key].hourlyRate,
          areas: coachesData[key].areas,
          id: key,
        };

        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp');
    }
  },
};
