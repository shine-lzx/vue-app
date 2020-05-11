import * as actionTypes from "./action-types.js";
const state = {
  token: "",
  openId: null,
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_OPENID: (state, openId) => {
    state.openId = openId;
  },
};

const actions = {
  [actionTypes.OPEN_ID]: ({ commit }, openId) => {
    commit("SET_TOKEN", openId);
    commit("SET_OPENID", openId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
