import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import MainPageView from "../views/MainPageView.vue";
import LoginView from "../views/LoginView.vue";
import InformationView from "../views/InformationView.vue";
import ContactView from "../views/ContactView.vue";
import ForgotView from "../views/ForgotView.vue";
import ForgotFolloView from "../views/ForgotFollowView.vue";
import ProfileView from "../views/ProfileView.vue"
import HistoryView from "../views/HistoryView.vue"
import EvaluationView from "../views/EvaluationView.vue"
import AppointmentView from "../views/AppointmentView.vue"
import Evaluation2View from "../views/Evaluation2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
    },
    {
      path: "/appointment",
      name: "appointment",
      component: AppointmentView,
    },
    {
      path: "/evaluation",
      name: "evaluation",
      component: EvaluationView,
    },
    {
      path: "/mainpage",
      name: "mainpage",
      component: MainPageView,
    },
    {
      path: "/",
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
    {
      path: "/forgot",
      name: "forgot",
      component: ForgotView,
    },
    {
      path: "/forgot-following",
      name: "forgot-following",
      component: ForgotFolloView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path : "/evaluation2",
      name : "evaluation2",
      component : Evaluation2View
    }
  ],
});

export default router;
