<style lang="less" scoped>
.outside {
  // height: 400px;
  width: 1000px;
}

.solid {
  border: 1px solid black;
}

.top {
  height: 50px;
  // width: 500px;
  // background-color: red;
}
.flex {
  display: flex;
}
.meflex {
  flex-direction: column;
}
.left {
  width: 200px;
}

.right {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blue {
  height: 150px;
  background-color: rgb(93, 155, 215);
  border-bottom: 2px black solid;
}
.red {
  height: 50px;
  background-color: rgb(255, 0, 1);
}
</style>
<template>
  <div class="outside">
    <div class="top solid"></div>
    <div class="flex">
      <div class="left solid"></div>
      <div class="right solid">
        <div class="blue"></div>
        <div class="red"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
}
</script>

