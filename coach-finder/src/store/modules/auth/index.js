let timer;

export default {
  state() {
    return {
      token: null,
      userId: null,
      isLoggedOut: false,
    };
  },

  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.isLoggedOut = false;
    },

    setAutoLogOut(state) {
      state.isLoggedOut = true;
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

    isAutoLoggedOut(state) {
      return state.isLoggedOut;
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
        const expiryTime = +expiresIn * 1000;

        const expirationDate = new Date().getTime() + expiryTime;

        localStorage.setItem('token', idToken);
        localStorage.setItem('userId', localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(() => {
          context.dispatch('autoLogout');
        }, expiryTime);

        context.commit('setUser', {
          token: idToken,
          userId: localId,
        });
      }
    },

    tryAutoLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
        });
      }
    },

    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null,
      });
    },

    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogOut');
    },
  },
};
