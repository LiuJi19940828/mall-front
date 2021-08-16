<template>
  <div class="coupon_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="coupon_form">
          <el-form-item label="优惠券名称：">
            <el-input size="small" placeholder="优惠券名称" v-model="coupon_form.name"></el-input>
          </el-form-item>
          <el-form-item label="优惠券类型：">
            <el-select v-model="coupon_form.type" placeholder="全部" size="small">
              <el-option v-for="item in coupon_type"
                         :label="item.label"
                         :value="item.value"
                         :key="item.label"
              ></el-option>
            </el-select>
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
          :data="coupon_table"
          border="true"
          width="100%"
      >
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="优惠券名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="优惠券类型" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="可使用商品" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.useType }}</span>
          </template>
        </el-table-column>
        <el-table-column label="使用门槛" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.minPoint }}</span>
          </template>
        </el-table-column>
        <el-table-column label="面值" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.amount }}元</span>
          </template>
        </el-table-column>
        <el-table-column label="使用平台" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.platform }}</span>
          </template>
        </el-table-column>
        <el-table-column label="有效期" align="center" width="140px">
          <template v-slot="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.status == 0">已过期</span>
            <span v-else>未过期</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="260px" align="center">
          <el-button size="mini">查看</el-button>
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
      coupon_form: {name: '', type: ''},
      coupon_type: [
        {
          label: '全场赠券',
          value: 1
        },
        {
          label: '会员赠券',
          value: 2
        },
        {
          label: '购物赠券',
          value: 3
        },
        {
          label: '注册赠券',
          value: 4
        }],
      coupon_table: [{
        id: 2,
        name: '全类品通用券',
        type: '全场赠券',
        useType: '全场通用',
        minPoint: '满100元可使用',
        amount: '10',
        platform: '全平台',
        date: '2018-08-27至2018-11-23',
        status: 0
      }, {
        id: 3,
        name: '小米手机专用券',
        type: '全场赠券',
        useType: '指定商品',
        minPoint: '满1000元可使用',
        amount: '50',
        platform: '全平台',
        date: '2018-08-27至2018-11-23',
        status: 0
      }, {
        id: 4,
        name: '手机品类通用',
        type: '全场赠券',
        useType: '指定品类',
        minPoint: '满2000元可使用',
        amount: '300',
        platform: '全平台',
        date: '2018-08-27至2018-11-23',
        status: 0
      }]
    }
  }
}
</script>

<style scoped>
.coupon_list_container {
  padding-left: 20px;
  padding-right: 20px;
}

</style>