<template>
  <div class="menu_list_container">
    <el-card>
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">添加</el-button>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="menu_table"
          border="true"
          width="100%"
      >
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="菜单名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="菜单级数" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.class }}</span>
          </template>
        </el-table-column>
        <el-table-column label="前端名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.fontName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="前端图标" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.fontIcon }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" align="center">
          <template v-slot="scope">
            <el-switch v-model="scope.row.show" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="排序" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设置" align="center" width="160px">
          <el-button size="mini">查看下级</el-button>
        </el-table-column>
        <el-table-column label="操作" width="180px" align="center">
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
      menu_table: [
        {
          id: 1,
          name: '商品',
          class: '一级',
          fontName: '',
          fontIcon: '',
          show: 1,
          sort: 0
        }, {
          id: 7,
          name: '订单',
          class: '一级',
          fontName: '',
          fontIcon: '',
          show: 1,
          sort: 0
        }, {
          id: 12,
          name: '营销',
          class: '一级',
          fontName: '',
          fontIcon: '',
          show: 1,
          sort: 0
        }, {
          id: 21,
          name: '权限',
          class: '一级',
          fontName: '',
          fontIcon: '',
          show: 1,
          sort: 0
        }
      ]
    }
  }
}
</script>

<style scoped>
.menu_list_container {
  padding-left: 20px;
  padding-right: 20px;
}

</style>