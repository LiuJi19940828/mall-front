<template>
  <div class="resource_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small" @click="handleReset">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="resource_form">
          <el-form-item label="资源名称：">
            <el-input size="small" placeholder="资源名称" v-model="resource_form.name"></el-input>
          </el-form-item>
          <el-form-item label="资源路径：">
            <el-input size="small" placeholder="资源路径" v-model="resource_form.path"></el-input>
          </el-form-item>
          <el-form-item label="资源类型：">
            <el-select size="small" placeholder="全部" v-model="resource_form.type">
              <el-option v-for="item in resource_type"
                         :label="item.label"
                         :key="item.label"
                         :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button-group style="float: right">
        <el-button size="small" @click="handleResourceCategory">资源分类</el-button>
        <el-button size="small" style="margin-left: 20px" @click="handleAdd">添加</el-button>
      </el-button-group>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="resource_table"
          border="true"
          width="100%"
      >
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="资源名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="资源路径" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.path }}</span>
          </template>
        </el-table-column>
        <el-table-column label="描述" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" align="center" width="200px">
          <template v-slot="scope">
            <span>{{ scope.row.addTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleDelte(scope.row,scope.$index)">删除</el-button>
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
    <el-dialog title="添加资源" :visible.sync="dialogVisible" width="40%">
      <el-form size="small" label-width="140px" inline v-model="add_form">
        <el-form-item label="资源名称：">
          <el-input size="small" placeholder="资源名称" v-model="add_form.name" class="input_width"></el-input>
        </el-form-item>
        <el-form-item label="资源路径：">
          <el-input size="small" placeholder="资源路径" v-model="add_form.path" class="input_width"></el-input>
        </el-form-item>
        <el-form-item label="资源类型：">
          <el-select size="small" placeholder="全部" v-model="add_form.type" class="input_width">
            <el-option v-for="item in resource_type"
                       :label="item.label"
                       :key="item.label"
                       :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input type="textarea" resize v-model="add_form.description" class="input_width"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm()" size="small">确 定</el-button>
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
      add_form: {name: '', path: '', type: '', description: ''},
      resource_form: {name: '', path: '', type: ''},
      resource_table: [
        {
          id: 1,
          name: '商品品牌管理',
          path: '/brand/**',
          description: '',
          addTime: '2020-02-04 17:04:55'
        },
        {
          id: 2,
          name: '商品属性分类管理',
          path: '/productAttribute/**',
          description: '',
          addTime: '2020-02-04 17:05:55'
        },
        {
          id: 3,
          name: '商品属性管理',
          path: '/productAttribute/**',
          description: '',
          addTime: '2020-02-05 17:05:55'
        },
        {
          id: 4,
          name: '商品管理',
          path: '/product/**',
          description: '',
          addTime: '2020-02-05 17:05:55'
        }

      ],
      resource_type: [{
        label: '商品模块',
        value: 1
      }, {
        label: '订单模块',
        value: 2
      }, {
        label: '营销模块',
        value: 3
      }, {
        label: '权限模块',
        value: 4
      }, {
        label: '内容模块',
        value: 5
      }, {
        label: '其他模块',
        value: 6
      }]
    }
  },
  methods: {
    handleAdd() {
      this.dialogVisible = true;
    },
    handleDialogConfirm() {

    },
    handleResourceCategory() {
      this.$router.push('/res/category');
    },
    handleEdit(row, index) {
      this.dialogVisible = true;
      this.add_form.name = row.name;
      this.add_form.path = row.path;
      this.add_form.description = row.description;
      this.add_form.type = row.type;
      console.log(index)
    },
    handleDelete(row, index) {
      console.log(index);
      console.log(row)
    },
    handleReset() {
      this.resource_form.name = '';
      this.resource_form.path = '';
      this.resource_form.type = '';
    }
  }
}
</script>

<style scoped>
.resource_list_container {
  padding-left: 20px;
  padding-right: 20px;
}

.input_width {
  width: 220px;
}

</style>