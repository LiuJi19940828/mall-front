<template>
  <div class="flash_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="flash_form">
          <el-form-item label="活动名称：">
            <el-input size="small" placeholder="活动名称" v-model="flash_form.name" class="input_width"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button-group style="float: right">
        <el-button size="small">秒杀时间段列表</el-button>
        <el-button size="small" style="margin-left: 20px">添加活动</el-button>
      </el-button-group>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="flash_table"
          border="true"
          width="100%"
      >
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="活动标题" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="活动状态" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.status ==0">活动未开始</span>
            <span v-else>活动已开始</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.start }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.end }}</span>
          </template>
        </el-table-column>
        <el-table-column label="上线/下线" align="center">
          <template v-slot="scope">
            <el-switch v-model="scope.row.isOnline" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="260px" align="center">
          <el-button size="mini">设置商品</el-button>
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
  name: "list",
  data() {
    return {
      flash_form: {
        name: ''
      },
      flash_table: [{id: 2, title: '春季家电家具疯狂秒杀1', status: 0, start: '2018-11-12', end: '2018-11-23', isOnline: 1},
        {id: 3, title: '手机特卖', status: 0, start: '2018-11-12', end: '2018-11-23', isOnline: 1},
        {id: 4, title: '春季家电家具疯狂秒杀3', status: 0, start: '2018-11-12', end: '2018-11-23', isOnline: 1},
        {id: 5, title: '春季家电家具疯狂秒杀4', status: 0, start: '2018-11-22', end: '2018-12-22', isOnline: 0},
        {id: 6, title: '春季家电家具疯狂秒杀2', status: 0, start: '2018-11-21', end: '2018-11-23', isOnline: 1}
      ]
    }
  }
}
</script>

<style scoped>
.flash_list_container{
  padding-left: 20px;
  padding-right: 20px;
}
</style>