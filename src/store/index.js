import Vue from 'vue';
import Vuex from 'vuex';

import toko from './toko';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toko,
  },
});
