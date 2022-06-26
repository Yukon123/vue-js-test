<template>
  <div class="">
    <h2>HomeSon: {{ love }}{{ cc }}</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="item in configObj" v-bind="item" :key="item.prop"></el-table-column>
    </el-table>
    <el-button @click="tapME">按我00000000000</el-button>
  </div>
</template>

<script>
import { configObj } from './configObj'
export default {
  name: '',
  components: {},
  props: {
    cc: {
      default: () => ({
        a: 6,
      }),
    },
    love: {
      type: Object,
      default() {
        return this.cc
      },
    },
  },
  data() {
    return {
      name: { name: 'son' },
      configObj: {},
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  watch: {},
  computed: {},
  methods: {
    tapME() {
      this.configObj[0].filters = []
      console.log('this.ff', this.configObj)
    },
  },
  created() {
    // import('./configObj.js').then((res) => {
    //   console.log({ res })
    //   this.configObj = res.configObj
    // })
  },
  mounted() {
    console.log({ config: configObj })
  },
  updated() {
    console.log({ config: this.configObj })
  },
}
</script>
<style lang="less" scoped></style>
