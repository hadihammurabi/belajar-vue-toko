export default {
  namespaced: true,
  state: {
    tokos: [],
    toko: {},
  },
  mutations: {
    add_toko(state, data) {
      state.tokos = [
        ...state.tokos,
        data,
      ];
    },
    set_toko(state, tokoId) {
      const toko = state.tokos.filter(({ id }) => id === tokoId);
      if (toko.length > 0) {
        [state.toko] = toko;
      }
    },
  },
  actions: {
    insert(store, data) {
      store.commit('add_toko', data);
    },
    set_toko(store, id) {
      store.commit('set_toko', id);
    },
  },
  getters: {
    toko(state) {
      return state.toko;
    },
    tokos(state) {
      return state.tokos;
    },
  },
};
