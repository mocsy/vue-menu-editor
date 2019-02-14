<template>
  <el-form :model="link">
    <el-form-item label="Text">
      <el-input v-model="link.text"></el-input>
    </el-form-item>
    <el-form-item label="Url">
      <el-input v-model="link.url"></el-input>
    </el-form-item>
    <el-form-item label="Target">
      <el-input v-model="link.target"></el-input>
    </el-form-item>
    <el-form-item label="Icon">
      <el-input v-model="link.icon"></el-input>
    </el-form-item>
  </el-form>
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
    link: {},
  },
  methods: {}
};
</script>
