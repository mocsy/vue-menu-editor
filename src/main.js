import Vue from "vue";
import VueNestable from "vue-nestable";
import Menu from "./menu_edit.vue";
import Link from "./link_edit.vue";

Vue.use(VueNestable);
Vue.component("link_edit", Link);
Vue.config.productionTip = false;

new Vue({
  render: h =>
    h(Menu, {
      props: {
        items: [
          {
            id: 0,
            text: "User",
            url: "user",
            target: "_self",
            icon: "fa fa-user-circle"
          },
          {
            id: 1,
            text: "Blog",
            url: "blog",
            target: "_self",
            icon: "fa fa-align-left",
            children: [
              {
                id: 2,
                text: "Food",
                url: "blog/food",
                target: "_self",
                icon: "fa fa-carrot"
              }
            ]
          },
          {
            id: 3,
            text: "Admin",
            url: "admin/dashboard",
            target: "_self",
            icon: "fa fa-toolbox"
          }
        ]
      }
    })
}).$mount("#app");
