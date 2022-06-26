<template>
  <div class="">
    <div>
      <span v-for="(x, index) in checkArr" :key="index">{{ x }}</span>
      <input type="checkbox" v-for="(x, index) in checkArr" :key="index" />
    </div>
    <div @click="checkArr.unshift(0)">点击添加头部复选框</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      checkArr: [1, 2, 3, 4, 5],
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped></style>
