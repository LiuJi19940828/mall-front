<template>
  <div class="type_container">
    <el-card>
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 10px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">添加</el-button>
    </el-card>
    <div class="type_table_container">
      <el-table border :data="type_table" width="100%">
        <el-table-column label="编号" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型名称" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.typeName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="属性数量" align="center" width="200px">
          <template slot-scope="scope">
            <span>{{ scope.row.attributeCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="参数数量" align="center" width="200px">
          <template slot-scope="scope">
            <span>{{ scope.row.paramCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设置" align="center" width="200px">
          <el-button size="small">属性列表</el-button>
          <el-button size="small">参数列表</el-button>
        </el-table-column>
        <el-table-column label="操作" align="center" width="200px">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="type_pagination_container">
      <el-pagination background
                     :total="4"
                     :page-size="5"
                     :page-sizes="[5,10,15]"
                     layout="total,sizes,prev,pager,next,jumper"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "type",
  data() {
    return {
      type_table: [{
        number: 1,
        typeName: '服装-t恤',
        attributeCount: 2,
        paramCount: 5
      }, {
        number: 2,
        typeName: '服装-裤装',
        attributeCount: 2,
        paramCount: 4
      }, {
        number: 3,
        typeName: '手机数码-手机通讯',
        attributeCount: 2,
        paramCount: 4
      }, {
        number: 4,
        typeName: '配件',
        attributeCount: 0,
        paramCount: 0
      }]
    }
  }
}
</script>

<style scoped>
.type_table_container {
  margin-top: 20px;
}

.type_pagination_container {
  margin-top: 20px;
  float: right;
}
.type_container{
  padding: 35px 20px 15px 20px;
}
</style>