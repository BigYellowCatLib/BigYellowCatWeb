<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="manage_tip">
          <span class="title">大黄猫后台管理系统</span>
        </div>
        <el-form :model="loginForm" :rules="rule" ref="loginForm" class="loginForm">
          <el-form-item prop="username">
            <span class="fa-tips">
              <i class="fa fa-user"></i>
            </span>
            <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <span class="fa-tips">
              <i class="fa fa-lock"></i>
            </span>
            <el-input class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>
<script>
import * as mUtils from "utils/mUtils"
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rule: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //登录
    submitForm(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
        } else {
          this.$notify.error({
            title: "错误",
            message: "请输入正确的用户名密码",
            offset: 100
          });
          return false;
        }
      });
      this.saveUserInfo();
      this.getMenuIndex();
    },
    	saveUserInfo(){
				const userinfo = {
					username:this.loginForm.username
				}
				mUtils.setStore('userinfo',userinfo)
			},
    getMenuIndex() {
      // const menuData = [
      //   {
      //     path: "/index",
      //     name: "首页",
      //     components: "index",
      //     icon: "fa-server",
      //     noDropdown: true,
      //     children: [{ path: "/index", name: "首页", components: "index" }]
      //   }
      // ];
      // mUtils.setStore("menuData", menuData);

      // console.log(!this.isLoadRoutes);
      // if (!this.isLoadRoutes) {
      //   // 首次进来为false,改变其状态为true
      //   const routes = mUtils.generateRoutesFromMenu(menuData); //根据菜单生成的路由信息,需要将数据库返回的对象key值转成小写
      //   console.log(routes);
      //   const asyncRouterMap = [
      //     {
      //       path: "/404",
      //       name: "404",
      //       hidden: true,
      //       components: require("page/404.vue")
      //     },
      //     {
      //       path: "/index",
      //       name: "",
      //       hidden: true,
      //       components: require("layout/home.vue"),
      //       redirect: "/index",
      //       children: routes
      //     }
      //   ];

      //   this.$router.addRoutes(asyncRouterMap);
      // }
      this.$router.push("/home");
     
    }
  }
};
</script>



<style lang="less" scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
	background: url(../assets/img/bg9.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.loginForm {
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 5px 5px 10px #01144c;
  .fa-tips {
    position: absolute;
    top: 0px;
    left: 10px;
    z-index: 20;
    color: #ff7c1a;
    font-size: 18px;
  }
}
.manage_tip {
  margin-bottom: 20px;
  .title {
    font-family: cursive;
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }
  .logo {
    width: 60px;
    height: 60px;
  }
}
.form_contianer {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 20%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  .submit_btn {
    width: 100%;
    font-size: 16px;
    letter-spacing: 20px;
  }
}
.tiparea {
  text-align: left;
  font-size: 12px;
  color: #4cbb15;
  .tip {
    margin-left: 54px;
  }
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
.loginForm {
  .el-button--primary {
    background-color: #ff7c1a;
    border: 1px solid #ff7c1a;
  }
}
</style>
