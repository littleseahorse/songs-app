import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    // tableData: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
    // setTableData(state, payload) {
    //   state.tableData = payload;
    // },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    // retrieveTableData({ commit }) {
    //   let tableData;
    //   commit('setTableData', tableData);
    // },
  },
  modules: {},
});
