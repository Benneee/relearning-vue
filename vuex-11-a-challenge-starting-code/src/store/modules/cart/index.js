import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,

  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },

  mutations,

  getters,

  actions,
};
