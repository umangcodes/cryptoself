import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Usage from "../views/Usage.vue";
import Signup from "../views/signup/Signup.vue";
import Login from "../views/signup/Login.vue";
import ResetPassword from "../views/signup/ResetPassword.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/usage",
    component: Usage,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
  },
];

const router = createRouter({
  base: "/",
  history: createWebHistory(),
  routes,
});

export default router;
