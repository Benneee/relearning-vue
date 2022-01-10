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

    token(state) {
      return state.token;
    },

    isAuthenticated(state) {
      return !!state.token;
    },
  },

  actions: {
    async signup(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'signup',
      });
    },

    async login(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'login',
      });
    },

    async auth(context, payload) {
      const mode = payload.mode;

      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_AUTH_KEY}`;

      if (mode === 'signup') {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_AUTH_KEY}`;
      }
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to authenticate',
        );
        throw error;
      } else {
        const { localId, idToken, expiresIn } = responseData;

        localStorage.setItem('token', idToken);
        localStorage.setItem('userId', localId);
        context.commit('setUser', {
          token: idToken,
          userId: localId,
          tokenExpiration: expiresIn,
        });
      }
    },

    tryAutoLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
          tokenExpiration: null,
        });
      }
    },

    logout(context) {
      context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
    },
  },
};
