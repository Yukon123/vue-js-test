<template>
  <div class="layout">
    <div class="aside"></div>
    <div class="main">
      <!-- 父子margin塌陷 -->
      <el-card>
        <div class="top">占位</div>
        <div class="father">
          <div class="son">父子margin</div>
        </div>
        <div class="top">占位</div>
      </el-card>
      <!-- 两栏布局 左边浮动 右边BFC -->
      <el-card>
        <div class="float-left"></div>
        <div class="bfc-right"></div>
      </el-card>
      <!-- 一个固定高度 高度自适应  高度自适应外面用div 不要用el的 -->
      <el-card>
        <div class="wrap">
          <div class="height-top">的</div>
          <div class="height-bottom">的</div>
        </div>
      </el-card>
      <!-- 水平垂直居中 -->
      <el-card>
        <div class="outter">
          <div class="inner">inner</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  height: 100vh;
  background-color: #00f;
}
.aside {
  height: 100%;
  width: 20vw;
  background-color: rgb(223, 56, 56);
}
.main {
  flex: 1;
  background-color: rgb(13, 199, 13);
  text-align: center;
}
.father {
  height: 100px;
  width: 300px;
  background-color: #0ff;
}
.son {
  margin-left: 100px;
  height: 100px;
  line-height: 100px;
  width: 100px;
  background-color: #ff0;
  margin-bottom: 10px;
}
.top {
  background-color: #f00;
  height: 50px;
  line-height: 50px;
}
.layout /deep/.el-card {
  background-color: #888;
  padding: 0 !important;
  margin: 0;
}
.float-left {
  float: left;
  background-color: #f00;
  width: 100px;
  height: 100px;
}
.bfc-right {
  overflow: hidden;
  background-color: #ff0;
  height: 100px;
}
.wrap {
  height: 100px;
}
.height-top {
  height: 30px;
  background-color: #f00;
}
.height-bottom {
  height: calc(100% - 30px);
  background-color: #00f;
}
.outter {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-color: #00f;
  height: 100px;
  width: 100vw;
}
.inner {
  display: inline-block;
  height: 50px;

  background-color: red;
}
</style>
