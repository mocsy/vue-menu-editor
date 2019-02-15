<template>
  <menuedit :items="items"></menuedit>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      items: [
          {
            id: 0,
            text: "User",
            url: "user",
            target: "_self",
            icon: "fa fa-user-circle",
            handleicon: "fa fa-arrows"
          },
          {
            id: 1,
            text: "Blog",
            url: "blog",
            target: "_self",
            icon: "fa fa-align-left",
            handleicon: "fa fa-arrows",
            children: [
              {
                id: 2,
                text: "Food",
                url: "blog/food",
                target: "_self",
                icon: "fa fa-carrot",
                handleicon: "fa fa-arrows"
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
  },
}
</script>

<style lang="css">
.nestable-list {
  list-style-type: none;
}
.nestable-handle .active {
  color: rebeccapurple;
}
.nestable [draggable="true"] {
  cursor: move;
}
</style>
