import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#sharedApp",
  router,
  store,
  render: (h) => h(App),
});
