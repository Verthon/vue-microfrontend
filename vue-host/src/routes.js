import Home from "./components/Home.vue";
import About from "./components/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/shared-about", component: () => import("shared/About") },
];

export default routes;
