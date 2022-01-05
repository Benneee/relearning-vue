import { createStore } from 'vuex';
import productModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },

  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },

  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },

    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
});

export default store;
