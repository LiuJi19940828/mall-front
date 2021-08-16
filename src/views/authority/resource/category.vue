<template>
  <div class="resource_category_container">
    <el-card>
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="margin-left: 20px;float: right" @click="handleAdd">添加</el-button>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="category_table"
          border="true"
          width="100%"
      >
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center" width="200px">
          <template v-slot="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加分类" width="40%" :visible="dialogVisible">
      <el-form label-width="140px" v-model="add_form">
        <el-form-item label="名称：">
          <el-input v-model="add_form.name" size="small" class="input_width"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input v-model="add_form.sort" size="small" class="input_width"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取消</el-button>
        <el-button size="small" type="primary" @click="handleDialogConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      add_form: {
        name: '',
        sort: 0
      },
      dialogVisible: false,
      category_table: [
        {
          id: 1,
          name: '商品模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        },
        {
          id: 2,
          name: '订单模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        },
        {
          id: 1,
          name: '商品模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        },
        {
          id: 3,
          name: '营销模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        },
        {
          id: 4,
          name: '权限模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        },
        {
          id: 5,
          name: '内容模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        },
        {
          id: 6,
          name: '其他模块',
          date: '2020-02-05 10:21:44',
          sort: 0
        }
      ]
    }
  },
  methods: {
    handleAdd() {
      this.dialogVisible = true;
    },
    handleDialogConfirm() {
      this.dialogVisible = false;
    },
    handleEdit(row, index) {
      this.dialogVisible = true;
      this.add_form.name = row.name;
      this.add_form.sort = row.sort;
      console.log(index)
    },
    handleDelete(row, index) {
      console.log(index);
      console.log(row)
    }
  }
}
</script>

<style scoped>
.resource_category_container {
  padding-right: 20px;
  padding-left: 20px;
}

.input_width {
  width: 200px;
}

</style>