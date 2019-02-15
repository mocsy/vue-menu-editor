import "./bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
import VueMenuEdit from "../src/main";
Vue.use(VueMenuEdit);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
