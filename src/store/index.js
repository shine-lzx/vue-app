import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import shopCar from "./modules/shopCar.js";
import app from "./modules/app.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    shopCar,
    app,
  },
});
