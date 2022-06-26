<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerName: '',
    }
  },
  methods: {
    toPath(value) {
      this.$router.push(value)
    },
  },
}
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.el-input {
  width: auto !important;
}
</style>
