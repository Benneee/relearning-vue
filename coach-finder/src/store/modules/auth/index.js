export default {
  state() {
    return {
      userId: 'c3',
    };
  },

  getters: {
    userId(state) {
      return state.userId;
    },
  },
};
