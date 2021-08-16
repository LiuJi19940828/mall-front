<template>
  <div class="role_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small" @click="handleReset">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="role_form">
          <el-form-item label="输入搜索：">
            <el-input size="small" placeholder="角色名称" v-model="role_form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right" @click="handleAdd">添加</el-button>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="role_table"
          border="true"
          width="100%"
      >
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="角色名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="描述" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户数" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.userCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.addTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否启用" align="center">
          <template v-slot="scope">
            <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220px" align="center">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" type="text">分配菜单</el-button>
              <el-button size="mini" type="text">分配资源</el-button>
            </div>
            <div style="margin-top: 10px">
              <el-button size="mini" type="text" @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
              <el-button size="mini" type="text" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
            </div>
          </template>
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
    <el-dialog title="添加角色" :visible.sync="dialogVisible" width="40%">
      <el-form size="small" label-width="140px" inline v-model="add_form">
        <el-form-item label="角色名称：">
          <el-input size="small" v-model="add_form.name" class="input_width"></el-input>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input size="small" type="textarea" resize v-model="add_form.description" class="input_width"></el-input>
        </el-form-item>
        <el-form-item label="是否启用：">
          <el-radio-group v-model="add_form.status">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      dialogVisible: false,
      role_form: {name: ''},
      role_table: [
        {
          id: 1,
          name: '商品管理员',
          description: '只能查看及操作商品',
          userCount: 0,
          addTime: '2020-02-03 16:50:37',
          status: 1
        },
        {
          id: 2,
          name: '订单管理员',
          description: '只能查看及操作订单',
          userCount: 0,
          addTime: '2020-02-03 16:50:37',
          status: 1
        },
        {
          id: 5,
          name: '超级管理员',
          description: '拥有所有查看及操作商品',
          userCount: 0,
          addTime: '2020-02-03 16:50:37',
          status: 1
        }
      ],
      add_form: {name: '', description: '', status: 1}
    }
  },
  methods: {
    handleReset() {
      this.role_form.name = '';
    },
    handleDialogConfirm() {
      this.dialogVisible = false;
    },
    handleAdd() {
      this.dialogVisible = true;
    },
    handleEdit(row, index) {
      this.dialogVisible = true;
      this.add_form.name = row.name;
      this.add_form.description = row.description;
      this.add_form.status = row.status;
      console.log(index);
    },
    handleDelete(row,index){
      console.log(index);
      console.log(row);
    }
  }
}
</script>

<style scoped>
.role_list_container {
  padding-right: 20px;
  padding-left: 20px;
}

.input_width {
  width: 260px
}

</style>