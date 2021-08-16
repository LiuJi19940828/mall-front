<template>
  <div class="user_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="user_form">
          <el-form-item label="输入搜索：">
            <el-input size="small" placeholder="帐号/姓名" v-model="user_form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">添加</el-button>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="user_table"
          border="true"
          width="100%"
      >
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="帐号" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.account }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.addTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后登录" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.lastLogin }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否启用" align="center">
          <template v-slot="scope">
            <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="260px" align="center">
          <el-button size="mini">分配角色</el-button>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-pagination
          layout="total,sizes,prev,pager,next,jumper"
          :page-sizes="[5,10,15]"
          :total="5"
          :page-size="5"
          background
          style="float: right"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      user_form: {name: ''},
      user_table: [
        {
          id: 1,
          account: 'test',
          name: '测试帐号',
          email: 'test@qq.com',
          addTime: '2018-09-29 13:55:30',
          lastLogin: '2018-09-29 13:55:39',
          status: 1
        }, {
          id: 2,
          account: 'admin',
          name: '系统管理员',
          email: 'admin@163.com',
          addTime: '2018-10-29 13:55:30',
          lastLogin: '2018-10-29 13:55:39',
          status: 1
        }, {
          id: 3,
          account: 'liuji',
          name: 'liuji',
          email: 'liuji@qq.com',
          addTime: '2018-10-08 13:55:30',
          lastLogin: '2018-10-08 13:55:39',
          status: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
.user_list_container {
  padding-left: 20px;
  padding-right: 20px;
}

</style>