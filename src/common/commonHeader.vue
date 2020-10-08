<template>
  <div class="common-header">
      <img src="../assets/logo.png" class="image" @click="routeToNavigation('/index')" style="height: inherit; padding-left: 20px" />
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  data() {
    return {};
  },

  methods: {
    // 跳转到指定路由
    routeToNavigation(url) {
      this.$router.replace(url);
    },
  },
};
</script>

<style scoped>
.common-header {
  width: 100%;
  min-width: 1250px;
  position: fixed;
  z-index: 302;
  top: 0;
  height: 60px;
  overflow: hidden;
  zoom: 1;
  margin: 0;
  padding: 10px;
  background-color: #fbfbfb;
  line-height: 40px;
}
</style>
