import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import MainPageView from "../views/MainPageView.vue";
import LoginView from "../views/LoginView.vue";
import InformationView from "../views/InformationView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/mainpage",
      name: "mainpage",
      component: MainPageView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/information",
      name: "information",
      component: InformationView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
