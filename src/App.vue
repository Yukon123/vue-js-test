<template>
  <div id="app">
    <el-header>
      <el-tabs type="border-card" @tab-click="toDirectPath">
        <el-tab-pane label="Css世界" name="cssworld"></el-tab-pane>
        <el-tab-pane label="布局" name="layout"></el-tab-pane>
        <el-tab-pane label="Echarts" name="echarts"></el-tab-pane>
      </el-tabs>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
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
    toDirectPath({ name }) {
      this.$router.push({ name })
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
