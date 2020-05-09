import * as actionTypes from "./action-types.js";
const state = {
  token: "",
  openId: "9999",
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  [actionTypes.OPEN_ID]: ({ commit }, openId) => {
    console.log(openId);
    commit("SET_TOKEN", openId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
