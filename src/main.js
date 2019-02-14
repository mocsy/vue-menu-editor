import Vue from "vue";
import Element from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// import App from "./App.vue";
import VueNestable from "vue-nestable";
import Menu from "./menu_edit.vue";
import Link from "./link_edit.vue";

Vue.use(Element);
Vue.use(VueNestable);
Vue.component("link_edit", Link);
Vue.config.productionTip = false;

new Vue({
  render: h => h(Menu)
}).$mount("#app");
