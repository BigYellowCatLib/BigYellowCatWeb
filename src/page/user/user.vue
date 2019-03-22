<template>
  <div style="width:100%;">
    <div style="width:100%; height:70px;margin-top:20px;">
      <div class="block">
        <div style="margin-left:50px;width:400px;float:left">
          <el-date-picker
            v-model="value5"
            type="datetimerange"
            :picker-options="pickerOptions2"
            range-separator="至"
            start-placeholder="创建开始日期"
            end-placeholder="创建结束日期"
            align="right"
          ></el-date-picker>
        </div>
        <div style="float:right;width:300px;text-align:right">
          <el-button type="primary">新增</el-button>
        </div>
      </div>
    </div>
    <div style=" margin-left:50px;">
      <el-table
        :default-sort="{prop: 'date', order: 'descending'}"
        stripe
        :data="tableData"
        border
        style="width: 100%"
        height="630"
      >
        <el-table-column fixed prop="userName" label="用户名" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>手机号: {{ scope.row.phone }}</p>
              <!-- <p>微: {{ scope.row.name }}</p> -->
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name}}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="cTime" label="创建时间" sortable width="120"></el-table-column>
        <el-table-column prop="lastLoginTime" label="最后一次登录时间" sortable width="210"></el-table-column>
        <el-table-column prop="status" label="状态" width="120">
          <template slot-scope="scope">
            <p v-if="scope.row.status=='正常'">
              <el-tag type="success">{{scope.row.status}}</el-tag>
            </p>
            <p v-if="scope.row.status=='离职'">
              <el-tag type="danger">{{scope.row.status}}</el-tag>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block" style="  text-align: center;margin-top:20px;width:100%">
  
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "正常"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "离职"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "正常"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "正常"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "正常"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "正常"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "离职"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "离职"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "离职"
        },
        {
          cTime: "2016-05-03",
          lastLoginTime: "2019-03-22",
          userName: "郑亚招",
          name: "王小虎",
          phone: "13121522829",
          status: "离职"
        }
      ]
    };
  }
};
</script>

<style>
.testDiv {
  background-color: blue;
  width: 300px;
  height: 300px;

}
</style>
