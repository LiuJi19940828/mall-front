<template>
  <div class="reason_container">
    <el-card>
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">添加</el-button>
    </el-card>
    <div class="reason_table_container">
      <el-table border :data="reason_table" width="100%">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="编号" align="center" prop="id"></el-table-column>
        <el-table-column label="原因类型" align="center" prop="reasonType"></el-table-column>
        <el-table-column label="排序" align="center" prop="sort"></el-table-column>
        <el-table-column label="是否可用" align="center">
          <template slot-scope="scope">
            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.available"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" align="center" prop="addTime" width="200px"></el-table-column>
        <el-table-column label="操作" align="center" width="200px">
          <el-button size="small">编辑</el-button>
          <el-button size="small">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-select v-model="operation_value" size="small" placeholder="批量操作">
        <el-option label="删除" :value="1"></el-option>
      </el-select>
      <el-button size="small" type="primary" style="margin-left: 20px">确定</el-button>
      <el-pagination background
                     :total="5"
                     :page-size="5"
                     :page-sizes="[5,10,15]"
                     layout="total,sizes,prev,pager,next,jumper"
                     style="float: right"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "reason",
  data() {
    return {
      reason_table: [{id: 1, reasonType: '质量问题', sort: 1, available: 1, addTime: '2018-10-17 10:00:45'},
        {id: 2, reasonType: '尺码太大', sort: 1, available: 1, addTime: '2018-10-17 10:01:45'},
        {id: 3, reasonType: '颜色不喜欢', sort: 1, available: 1, addTime: '2018-10-17 10:02:45'},
        {id: 4, reasonType: '七天无理由', sort: 1, available: 1, addTime: '2018-10-17 10:03:45'},
        {id: 5, reasonType: '价格问题', sort: 1, available: 0, addTime: '2018-10-17 10:00:45'}
      ],
      operation_value: '',
    }
  }
}
</script>

<style scoped>
.reason_table_container {
  margin-top: 20px;
}
.reason_container{
  padding: 20px 20px 10px 20px;
}

</style>