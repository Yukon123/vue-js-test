<template>
  <div class="">
    <el-form inline>
      <el-form-item v-for="(item, index) in tabConfig" :key="getValue(item)" :rule="rule">
        <el-input v-model="tabData[index]" :placeholder="tabConfig[index].appId"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      radomArr: [],
      tabData: [],
      tabConfig: [],
      rule: [{ required: true, trigger: 'blur' }],
    }
  },
  watch: {},
  computed: {},
  methods: {
    getValue() {
      var array = new Uint32Array(500)
      this.radomArr = window.crypto.getRandomValues(array)
      return this.radomArr[0]
    },
  },
  created() {
    this.tabConfig[500] = 'foo'
    this.tabConfig.fill('bar')
    console.log(this.tabConfig)
    this.tabConfig = this.tabConfig.map((item) => ({
      appId: this.getValue(),
      value: item,
    }))
    console.log(this.tabConfig)
  },
  mounted() {},
}
</script>
<style lang="less" scoped></style>
