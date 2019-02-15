<template>
  <div>
    <vue-nestable v-model="nestableItems">
      <vue-nestable-handle
        slot-scope="{ item }"
        :item="item"
        v-on:click.native="item_click(item)"
        :class="{ active: item == active_item }"
      >
        <i :class="item.handleicon" v-if="item.handleicon" />
        {{ item.text }}
      </vue-nestable-handle>
    </vue-nestable>
    <linkedit :link="active_item"></linkedit>
  </div>
</template>

<script>
export default {
  name: "menu_edit",
  data: function() {
    return {
      nestableItems: [],
      active_item: null
    };
  },
  props: {
    items: {},
    validate: {}
  },
  watch: {
    validate: function() {
      this.$emit("data", this.nestableItems);
      this.$emit("validated", true);
    }
  },
  mounted: function() {
    if (this.items) {
      this.nestableItems = this.items;
    }
  },
  methods: {
    item_click: function(item) {
      this.active_item = item;
    }
  }
};
</script>
