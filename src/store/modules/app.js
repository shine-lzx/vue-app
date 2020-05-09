const state = {
  direction: "forward", // 页面切换方向
};

const mutations = {
  updateDirection(state, direction) {
    state.direction = direction;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
