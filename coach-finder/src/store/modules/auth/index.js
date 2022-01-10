export default {
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null,
    };
  },

  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },

  getters: {
    userId(state) {
      return state.userId;
    },
  },

  actions: {
    async signup(context, payload) {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_AUTH_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        },
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error('res-on-error: ', responseData);
        const error = new Error(
          responseData.message || 'Failed to authenticate',
        );
        throw error;
      } else {
        console.log('res-on-success: ', responseData);
        const { localId, idToken, expiresIn } = responseData;
        context.commit('setUser', {
          token: idToken,
          userId: localId,
          tokenExpiration: expiresIn,
        });
      }
    },

    async login(context, payload) {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_AUTH_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        },
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error('res-on-error: ', responseData);
        const error = new Error(
          responseData.message || 'Failed to authenticate',
        );
        throw error;
      } else {
        console.log('res-on-success: ', responseData);
        const { localId, idToken, expiresIn } = responseData;
        context.commit('setUser', {
          token: idToken,
          userId: localId,
          tokenExpiration: expiresIn,
        });
      }
    },
  },
};
