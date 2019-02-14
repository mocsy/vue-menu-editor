<template>
  <div>
    <vue-nestable v-model="nestableItems">
      <vue-nestable-handle
        slot-scope="{ item }"
        :item="item" v-on:click.native="item_click(item)" :class="{'active': item == active_item}">
        {{ item.text }}
      </vue-nestable-handle>
    </vue-nestable>
    <link_edit :link="active_item"></link_edit>
  </div>
</template>

<script>
export default {
  name: "menu_edit",
  data: function () {
    return {
      visual: "",
      url: "",
      active: false,
      icon: "",
      clearance: 0,
      children: [],
      nestableItems: [
        {
          id: 0,
          text: 'User',
          url: "user",
          target: "_self",
          icon: "fa fa-user-circle",
        }, {
          id: 1,
          text: 'Blog',
          url: "blog",
          target: "_self",
          icon: "fa fa-align-left",
          children: [{
            id: 2,
            text: 'Food',
            url: "blog/food",
            target: "_self",
            icon: "fa fa-carrot",
          }]
        }, {
          id: 3,
          text: 'Admin',
          url: "admin/dashboard",
          target: "_self",
          icon: "fa fa-toolbox",
        }
      ],
      active_item: null,
    };
  },
  props: {
    items: String
  },
  methods: {
    item_click: function (item) {
      this.active_item = item;
    },
  },
};
</script>

<style scoped lang="scss">
  .active {
    color: red;
  }
</style>
