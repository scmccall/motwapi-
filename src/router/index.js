import Vue from "vue";
import Router from "vue-router";
import VueMeta from "vue-meta";

import Home from "./../components/pages/Home.vue";
import Documentation from "./../components/pages/Documentation.vue";

Vue.use(Router);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/documentation",
    name: "Documentation",
    component: Documentation
  }
];

export default new Router({
  routes
});
