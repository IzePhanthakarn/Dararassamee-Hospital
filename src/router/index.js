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
import AdminElearnView from "../views/AdminView/AdminElearnView.vue";
import AdminNewsView from "../views/AdminView/AdminNewsView.vue";
import AdminUserView from "../views/AdminView/AdminUserView.vue";
import AdminDetailsView from "../views/AdminView/AdminDetailsView.vue";
import AdminEvaluationView from "../views/AdminView/AdminEvaluationView.vue";
import UserInformationView from "../views/AdminView/UserDetailsView/UserInformationView.vue";
import StatusDangerView from "../views/AdminView/EvaluationDataView/StatusDangerView.vue";
import StatusNormalView from "../views/AdminView/EvaluationDataView/StatusNormalView.vue";
import StatusWarningView from "../views/AdminView/EvaluationDataView/StatusWarningView.vue"

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
      path: "/admin-elearn",
      name: "ศูนย์การเรียนรู้",
      component: AdminElearnView,
    },
    {
      path: "/admin-user",
      name: "รายชื่อผู้ป่วย",
      component: AdminUserView,
    },
    {
      path: "/admin-evaluation",
      name: "ผลการประเมิน",
      component: AdminEvaluationView,
    },
    {
      path: "/admin-news",
      name: "admin-news",
      component: AdminNewsView,
    },
    {
      path: "/user-details/:name",
      name: "รายละเอียดผู้ป่วย",
      component: AdminDetailsView,
    },
    {
      path: "/user-details/:name/information",
      name: "ประวัติผู้ป่วย",
      component: UserInformationView,
    },
    {
      path: "/normal",
      name: "ปกติ",
      component:StatusNormalView,
    },
    {
      path: "/warning",
      name: "ปานกลาง",
      component:StatusWarningView,
    },
    {
      path: "/danger",
      name: "อันตราย",
      component:StatusDangerView,
    }
  ],
});

export default router;
