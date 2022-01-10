export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.isLoggedOut = false;
  },

  setAutoLogOut(state) {
    state.isLoggedOut = true;
  },
};
