import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,

  state() {
    return {
      // each request will contain a coachId, if a loggedIn coachId's
      // request is found here, that's the request the loggedIn coach will be seeing
      requests: [],
    };
  },

  mutations,

  getters,

  actions,
};
