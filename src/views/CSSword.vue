<template>
  <div class="">
    <!-- width 默认值auto 和值为100%的区别 -->
    <div class="outter">
      <div class="inner"></div>
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
.outter {
  width: 200px;
  height: 30px;
  background-color: red;
}
.inner {
  height: 30px;
  background-color: #0f0;
  padding: 20px;
}
</style>
