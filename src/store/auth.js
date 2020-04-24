// eslint-disable-next-line no-redeclare
/* global localStorage */

import User from '@/models/User';
import * as MutationTypes from './mutation-types';

const state = {
  user: User.from(localStorage.token),
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [MutationTypes.LOGIN](state) {
    state.user = User.from(localStorage.token);
  },
  // eslint-disable-next-line no-shadow
  [MutationTypes.LOGOUT](state) {
    state.user = null;
  },
};

const getters = {
  // eslint-disable-next-line no-shadow
  currentUser(state) {
    return state.user;
  },
};

const actions = {
  login({ commit }) {
    commit(MutationTypes.LOGIN);
  },

  logout({ commit }) {
    commit(MutationTypes.LOGOUT);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
