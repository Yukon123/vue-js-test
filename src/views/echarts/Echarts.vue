<template>
  <div class="">
    <div id="barcharts">11</div>
    <h1>1123</h1>
  </div>
</template>

<script>
import { option } from './mycharts'
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
  mounted() {
    var chartDom = document.getElementById('barcharts')
    console.log(chartDom)
    var myChart = window.echarts.init(chartDom)
    myChart.setOption(option)
  },
}
</script>
<style lang="less" scoped>
#barcharts {
  height: 600px;
}
</style>
