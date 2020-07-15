import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/schedule",
    name: "schedule",
    component: ()=>import('./newView/schedule')
  },
  {
    path: "/setup",
    name: "Setup",
    component: ()=>import('./newView/setup')
  }
];

const router = new VueRouter({
  routes
});

export default router;
