import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import MainPageView from "../views/MainPageView.vue";
import LoginView from "../views/LoginView.vue";
import InformationView from "../views/InformationView.vue";
import ContactView from "../views/ContactView.vue";
import ForgotView from "../views/ForgotView.vue";
import ForgotFolloView from "../views/ForgotFollowView.vue";
import ProfileView from "../views/ProfileView.vue";
import HistoryView from "../views/HistoryView.vue";
import AppointmentView from "../views/AppointmentView.vue";
import EvaluationQ5View from "../views/EvaluationQ5View.vue";
import EvaluationQ8View from "../views/EvaluationQ8View.vue";
import EvaluationQ9View from "../views/EvaluationQ9View.vue";
import SelectEvaluationView from "../views/SelectEvaluationView.vue";
import AdminHistoryView from "../views/AdminView/AdminHistoryView.vue";
import AdminHomeView from "../views/AdminView/AdminHomeView.vue";
import AdminInformationView from "../views/AdminView/AdminInformationView.vue";
import AdminUserView from "../views/AdminView/AdminUserView.vue";

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
      path: "/evaluationQ5",
      name: "evaluationQ5",
      component: EvaluationQ5View,
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
      path: "/evaluationQ8",
      name: "evaluationQ8",
      component: EvaluationQ8View,
    },
    {
      path: "/evaluationQ9",
      name: "evaluationQ9",
      component: EvaluationQ9View,
    },
    {
      path: "/select-evaluation",
      name: "select-evaluation",
      component: SelectEvaluationView,
    },
    {
      path: "/admin-history",
      name: "admin-history",
      component: AdminHistoryView,
    },
    {
      path: "/admin-user",
      name: "admin-user",
      component: AdminUserView,
    },
    {
      path: "/admin-information",
      name: "admin-information",
      component: AdminInformationView,
    },
    {
      path: "/admin-home",
      name: "admin-home",
      component: AdminHomeView,
    },
  ],
});

export default router;
