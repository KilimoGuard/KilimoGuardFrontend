import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: null,
      token: null,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    login({ commit }, { user, token }) {
      commit('setUser', user);
      commit('setToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    },
    logout({ commit }) {
      commit('clearAuth');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    initializeAuth({ commit }) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (user && token) {
        commit('setUser', JSON.parse(user));
        commit('setToken', token);
      }
    },
  },
});

export default store;
