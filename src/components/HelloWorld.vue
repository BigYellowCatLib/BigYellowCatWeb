<template>
  <el-container>
    <el-header>
      <h1>BYC管理系统</h1>
    </el-header>
    <el-main>
      <table id="login-table" style="width:300px;height:200px;margin:0 auto;margin-top:20px">
        <tr>
          <td>
            <el-input placeholder="请输入用户名" v-model="userName" clearable></el-input>
          </td>
        </tr>
        <tr>
          <td>
            <el-input placeholder="请输入密码" v-model="passWord" show-password></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <el-button
              style=" width:300px"
              v-bind:disabled="loginText=='正在登录....'"
              type="primary"
              :loading="loginText=='正在登录....'"
              v-on:click="onLogin()"
            >{{loginText}}</el-button>
          </td>
        </tr>
      </table>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import publicConfig from "../common/publicConfig";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userName: "",
      passWord: "",
      loginText: "登录",
      item: publicConfig
    };
  },
  methods: {
    /**
     * 登录
     */
    onLogin: function() {
      this.loginText = "正在登录....";

      this.$message({
        message: this.item.fetch(),
        type: "success"
      });

      // this.$router.push({ path: "/main" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input:focus {
  border-style: solid;
  border-color: #339933;
}
</style>
