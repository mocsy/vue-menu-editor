import VueNestable from "vue-nestable";
import Menu from "./menu_edit.vue";
import Link from "./link_edit.vue";

export default {
  install(Vue) {
    Vue.config.productionTip = false;
    Vue.use(VueNestable);
    Vue.component("linkedit", Link);
    Vue.component("menuedit", Menu);
  }
};

export { Menu };
