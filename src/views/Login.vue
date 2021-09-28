<template>
  <div class="login">
    <div class="wrapper">
      <div class="inner">
        <span>账号</span>
        <input type="text" v-model="loginParams.username" />
      </div>
      <div class="inner">
        <span>密码</span>
        <input v-model="loginParams.password" />
      </div>
      <div class="button" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      loginParams: {
        username: 'admin',
        password: '123456',
      },
      cookie: '',
    }
  },
  watch: {},
  computed: {},
  methods: {
    async login() {
      let res = await this.$http.post('login', this.loginParams)
      Cookies.set('token', res.data.token, { expires: 7 })
      if (res.meta.status !== 200) return
      this.$router.push('/home')
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 400px;
  height: 200px;
  background-color: aqua;
}
.button {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
