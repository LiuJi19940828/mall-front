<template>
  <div class="category_container">
    <el-card>
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 5px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right" @click="handleAdd">添加</el-button>
    </el-card>
    <div class="category_table_container">
      <el-table border :data="categoryTable">
        <el-table-column label="编号" width="100px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类名称" width="100px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="级别" width="100px" align="center" prop="class">
          <template slot-scope="scope">
            <span v-if="scope.row.level === 0">一级</span>
          </template>
        </el-table-column>
        <el-table-column label="商品数量" width="100px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.productCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量单位" width="80px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.productUnit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="导航栏" width="100px" align="center">
          <template slot-scope="scope">
            <el-switch :active-value="1"
                       :inactive-value="0"
                       v-model="scope.row.navStatus"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100px" align="center">
          <template slot-scope="scope">
            <el-switch :active-value="1"
                       :inactive-value="0"
                       v-model="scope.row.showStatus"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设置" width="200px" align="center">
          <template slot-scope="scope">
            <el-button size="small" @click="handleShowNextLevel(scope.row.id)" :disabled="scope.row.level != 0">查看下级
            </el-button>
            <el-button size="small">转移商品</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px" align="center">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="category_pagination-container">
      <el-pagination layout="total,sizes,prev,pager,next,jumper"
                     :total="total"
                     :page-size="pageSize"
                     :current-page.sync="pageNum"
                     :page-sizes="[5,10,15]"
                     background
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import {getFirstMenuListWithChildren, getChildMenuList, deleteCate} from "@/api/productCate";
import {Message} from "element-ui";

export default {
  name: "category",
  data() {
    return {
      categoryTable: [],
      pageSize: null,
      pageNum: null,
      total: null,
      level: 0,
      id: 0
    }
  },
  created() {
    let params = {pageSize: 5, pageNum: 1};
    this.getMenus(params);
  },
  methods: {
    getMenus(params) {
      getFirstMenuListWithChildren(params).then(response => {
        this.categoryTable = response.data.data.list;
        this.total = response.data.data.total;
        this.pageSize = response.data.data.pageSize;
        this.pageNum = response.data.data.pageNum;
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      });
    },
    handleCurrentChange(val) {
      let params = {pageSize: this.pageSize, pageNum: val};
      if (this.level == 0) {
        this.getMenus(params);
      } else {
        this.handleShowNextLevel(this.id), params;
      }
    },
    handleSizeChange(val) {
      let params = {pageSize: val, pageNum: 1};
      if (this.level == 0) {
        this.getMenus(params);
      } else {
        this.handleShowNextLevel(this.id, params);
      }
    },
    handleAdd() {
      this.$router.push('/product/category/add')
    },
    handleShowNextLevel(id, params) {
      this.level = 1;
      this.id = id;
      getChildMenuList(id, params).then(response => {
        this.categoryTable = response.data.data.list[0].subMenuList;
        this.total = response.data.data.total;
        this.pageSize = response.data.data.pageSize;
        this.pageNum = response.data.data.pageNum;
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    handleEdit(row) {
      this.$router.push({path: '/product/category/update', query: {id: row.id}});
    },
    handleDelete(row) {
      this.$confirm('是否删除该分类?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        deleteCate(row.id).then(response => {
          Message({
            type: 'success',
            message: response.status + '：删除成功',
            duration: 3000
          })
        }).catch(error => {
          Message({
            type: 'error',
            message: error.toString(),
            duration: 3000
          })
        })
        this.getMenus({pageSize: this.pageSize, pageNum: this.pageNum})
      })
    }
  }
}
</script>

<style scoped>
.category_table_container {
  width: 100%;
  margin-top: 20px;
}

.category_pagination-container {
  margin-top: 20px;
  float: right;
}

.category_container {
  padding: 35px 20px 15px 20px;
}
</style>