<template>
  <form v-if="link">
    <div class="form-group">
      <div>
        <label for="text">Text</label>
      </div>
      <input type="text" class="form-control" id="text" v-model="link.text" />
    </div>
    <div class="form-group">
      <div>
        <label for="url">Url</label>
      </div>
      <input type="text" class="form-control" id="url" v-model="link.url" />
    </div>
    <div class="form-group">
      <div>
        <label for="target">Target</label>
      </div>
      <input
        type="text"
        class="form-control"
        id="target"
        v-model="link.target"
      />
    </div>
    <div class="form-group">
      <div>
        <label for="icon">Icon</label>
      </div>
      <input type="text" class="form-control" id="icon" v-model="link.icon" />
    </div>
  </form>
</template>

<script>
export default {
  name: "link_edit",
  data: function() {
    return {
      // link: {
      //   text: "",
      //   url: "",
      //   target: "",
      //   icon: "",
      //   children: []
      // }
    };
  },
  props: {
    link: {}
  },
  methods: {}
};
</script>
