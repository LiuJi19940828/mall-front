<template>
  <div class="hot_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="hot_form">
          <el-form-item label="商品名称：">
            <el-input size="small" placeholder="商品名称" v-model="hot_form.name"></el-input>
          </el-form-item>
          <el-form-item label="推荐状态：">
            <el-select v-model="hot_form.status" placeholder="全部" size="small">
              <el-option label="未推荐" value="0"></el-option>
              <el-option label="推荐中" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">选择商品</el-button>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="hot_table"
          border="true"
          width="100%"
      >
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否推荐" align="center">
          <template v-slot="scope">
            <el-switch v-model="scope.row.isRecommend" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="排序" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.status == 0">未推荐</span>
            <span v-else>推荐中</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px" align="center">
          <el-button size="small">设置排序</el-button>
          <el-button size="small">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-select size="small" v-model="operation_value">
        <el-option label="设为推荐" value="1"></el-option>
        <el-option label="取消推荐" value="2"></el-option>
        <el-option label="删除" value="3"></el-option>
      </el-select>
      <el-button type="primary" size="small" style="margin-left: 20px">确定</el-button>
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
      hot_form: {name: '', status: ''},
      hot_table: [{
        id: 2,
        name: '小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待',
        isRecommend: 1,
        sort: 200,
        status: 1
      }, {
        id: 1,
        name: 'test',
        isRecommend: 0,
        sort: 200,
        status: 0
      }, {
        id: 3,
        name: 'Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机',
        isRecommend: 1,
        sort: 100,
        status: 1
      }],
      operation_value: ''
    }
  }
}
</script>

<style scoped>
.hot_list_container {
  padding-right: 20px;
  padding-left: 20px;
}

</style>