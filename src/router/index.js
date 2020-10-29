import Vue from "vue";
import Router from "vue-router";

import Home from "./../components/pages/Home.vue";
import Documentation from "./../components/pages/Documentation.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/documentation", name: "Documentation", component: Documentation }
  ]
});
