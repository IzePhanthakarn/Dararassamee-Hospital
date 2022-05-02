import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faApplePay, fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navbar from "./components/mainpage/navbar.vue";
import AdminNavbar from "./components/adminpage/subcomponents/navbarAdmin.vue";
import AdminTitleBar from "./components/adminpage/subcomponents/titlebarAdmin.vue";
import AdminTopicBar from "./components/adminpage/subcomponents/topicbarAdmin.vue";
import OptionIncome from "./components/subcomponents/evaluationsubQ5/option-part1/option-income.vue";
import OptionSex from "./components/subcomponents/evaluationsubQ5/option-part1/option-sex.vue";
import OptionStudy from "./components/subcomponents/evaluationsubQ5/option-part1/option-study.vue";
import OptionWorkage from "./components/subcomponents/evaluationsubQ5/option-part1/option-workage.vue";
import OptionQ5Part2 from "./components/subcomponents/evaluationsubQ5/option-part2.vue";
import OptionQ5Part3 from "./components/subcomponents/evaluationsubQ5/option-part3.vue";
import DesEvaQ5First from "./components/subcomponents/evaluationsubQ5/description-part1.vue";
import DesEvaQ5Sec from "./components/subcomponents/evaluationsubQ5/description-part2.vue";
import DesEvaQ5Third from "./components/subcomponents/evaluationsubQ5/description-part3.vue";
import OptionQ9 from "./components/subcomponents/evaluationsubQ9/option.vue";
import OptionQ8 from "./components/subcomponents/evaluationsubQ8/option.vue";
import OptionQ8Death from "./components/subcomponents/evaluationsubQ8/option-death.vue";
import DesEvaQ9 from "./components/subcomponents/evaluationsubQ9/description.vue";
import DesEvaQ8 from "./components/subcomponents/evaluationsubQ8/description.vue";
import PhysicalData from "./components/history/data-history/physical-data.vue";
import MentallyData from "./components/history/data-history/mentally-data.vue";
import UserInfo from "./components/adminpage/adminData/user-info.vue";

library.add(fas);
library.add(far);
library.add(fab);
const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.component("Nav",Navbar);
app.component("Ad-Nav",AdminNavbar);
app.component("Ad-Title",AdminTitleBar);
app.component("Ad-Topic",AdminTopicBar);
app.component("Opbar-income", OptionIncome);
app.component("Opbar-sex", OptionSex);
app.component("Opbar-study", OptionStudy);
app.component("Opbar-workage", OptionWorkage);
app.component("Opbar-2", OptionQ5Part2);
app.component("Opbar-3", OptionQ5Part3);
app.component("Des-1", DesEvaQ5First);
app.component("Des-2", DesEvaQ5Sec);
app.component("Des-3", DesEvaQ5Third);
app.component("OpbarQ9",OptionQ9);
app.component("OpbarQ8",OptionQ8);
app.component("Opbar-Death",OptionQ8Death);
app.component("DesQ9",DesEvaQ9);
app.component("DesQ8",DesEvaQ8);
app.component("PhyData",PhysicalData);
app.component("MentData",MentallyData);
app.component("UserInfo",UserInfo);

app.use(router);

app.mount("#app");

