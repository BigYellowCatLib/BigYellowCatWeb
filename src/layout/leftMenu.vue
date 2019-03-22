<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        mode="vertical"
        theme="dark"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#ff6428"
      >
        <template v-for="(item,index) in lefeMenuList">
          <!--表示 有二级菜单 -->
          <el-submenu
            v-if="item.children  && item.children.length > 0 && !item.noDropdown"
            :index="item.path"
            :key="index"
          >
            <template slot="title">
              <i :class="'fa fa-margin '+item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
              <el-menu-item-group :index="citem.path">
                <span slot="title">{{citem.name}}</span>
              </el-menu-item-group>
            </router-link>
          </el-submenu>

          <!--表示 有一级菜单 noDropdown:true-->
          <router-link :to="item.path" :key="index">
                <el-menu-item v-if="item.noDropdown" :index="item.path">
                      <i :class="'fa fa-margin '+item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            <el-submenu
              class="dropItem"
              v-if="item.children && item.children.length > 0 && item.noDropdown==false"
              :index="item.path"
            >
            
              <template slot="title">
                <i :class="item.icon"></i>
                <span class="23">{{item.name}}</span>
              </template>
            </el-submenu>

            
          </router-link>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import * as mUtils from "@/utils/mUtils";

export default {
  name: "left-Menu",
  data() {
    return {
      isDropdown: false
    };
  },
  computed: {
    lefeMenuList() {
      return  [
      {path:'/index',name:'首页',component:'index',icon:'fa-server',noDropdown:true,
						children:[
							{path:'/index',name:'首页',component:'index'},
						]
					},
					{path:'/userList',name:'用户列表',component:'userList',icon:'fa-user',noDropdown:true,
						children:[
							{path:'/userList',name:'用户列表',component:'userList'},
						]
					},
					{path:'/infoList',name:'信息列表',component:'infoList',icon:'fa-envelope',noDropdown:true,
						children:[
							{path:'/infoList',name:'信息列表',component:'infoList'},
						]
					},
					{path:'/infoManage',name:'信息管理',component:'content',icon:'fa-asterisk',
						children:[
							{path:'/infoShow',name:'个人信息',component:'infoShow'},
							{path:'/infoModify',name:'修改信息',component:'infoModify'}
						]
					},
					{path:'/fundManage',name:'资金管理',component:'content',icon:'fa-money',
						children:[
							{path:'/fundList',name:'资金流水',component:'fundList'},
							{path:'/payList',name:'支付单据',component:'payList'}
						]
			        },
					{path:'/touziManage',name:'投资管理',component:'content',icon:'fa-inbox',
						children:[
							{path:'/chinaTouziList',name:'省份投资',component:'chinaTouziList'},
							{path:'/chinaTabsList',name:'区域投资',component:'chinaTabsList'}
						]
			        },
					{path:'/fundArticle',name:'金融文章',component:'content',icon:'fa-file-text-o',
						children:[
							{path:'/createFundArticle',name:'发布文章',component:'createFundArticle'},
							{path:'/modifyFundArticle',name:'编辑文章',component:'modifyFundArticle'},
							{path:'/showFundArticle',name:'查看文章',component:'showFundArticle'}
						]
			        },
					{path:'/fundData',name:'资金数据',component:'content',icon:'fa-bar-chart-o',
						children:[
							{path:'/fundPosition',name:'投资分布',component:'fundPosition'},
							{path:'/typePosition',name:'项目分布',component:'typePosition'},
							{path:'/incomePayPosition',name:'收支统计',component:'incomePayPosition'}
						]
			        },
      ];
      //  return this.$store.state.menu.items;
    },
    isDropname() {
      // false
      //  return this.$store.state.menu.isDropname;
    },
    isCollapse() {
      // return this.$store.state.menu.isCollapse;
    }
  },
  created() {
    //   console.log(this.$store.state.menu.items);
  },
  methods: {
    showDropdown() {
      //   this.isDropdown = this.$store.state.menu.isCollapse;
    }
  }
};
</script>


<style lang="less" scoped>
.menu_page {
  position: fixed;
  top: 70px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
.el-menu {
  .el-menu-item {
    // padding-left: 40px !important;
  }
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
.router-link-active {
  li {
    .el-submenu__title {
      color: #ff6428 !important;
    }
  }
}
</style>
