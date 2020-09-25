export default {
  namespaced: true,
  state: {
    tokos: [],
  },
  mutations: {
    set_toko(state, data) {
      state.tokos = [
        ...state.tokos,
        data,
      ];
    },
  },
  actions: {
    insert(store, data) {
      store.commit('set_toko', data);
    },
  },
  getters: {
    tokos(state) {
      return state.tokos;
    },
  },
};
