export default {
  namespaced: true,

  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },

  mutations: {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
  },

  getters: {
    coaches(state) {
      return state.coaches;
    },

    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },

    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some((coach) => coach.id === userId);
    },
  },

  actions: {
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
  },
};
