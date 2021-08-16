<template>
  <div class="order_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div class="order_list_form">
        <el-form size="small" label-width="120px" inline v-model="order_list">
          <el-form-item label="输入搜索：">
            <el-input size="small" placeholder="订单编号" v-model="order_list.orderNumber" class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="收货人：">
            <el-input size="small" placeholder="收货人姓名/手机号码" v-model="order_list.receiver"
                      class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="提交时间：">
            <el-date-picker type="date" placeholder="请选择时间" size="small" class="input_width"
                            v-model="order_list.commitTime"></el-date-picker>
          </el-form-item>
          <el-form-item label="订单状态：">
            <el-select size="small" placeholder="全部" v-model="order_list.orderStatus" class="input_width">
              <el-option v-for="item in orderStatusOptions"
                         :label="item.label"
                         :value="item.value"
                         :key="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单分类：">
            <el-select size="small" placeholder="全部" v-model="order_list.orderCategory" class="input_width">
              <el-option label="正常订单" value="1"></el-option>
              <el-option label="秒杀订单" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源：">
            <el-select size="small" placeholder="全部" v-model="order_list.orderSource" class="input_width">
              <el-option label="PC订单" value="1"></el-option>
              <el-option label="APP订单" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <div>
        <i class="el-icon-tickets"></i>
        <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      </div>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="order_table"
          border="true"
          width="100%"
      >
        <el-table-column type="selection" width="60px"></el-table-column>
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="订单编号" align="center" width="200px">
          <template v-slot="scope">
            <span>{{ scope.row.orderId }}</span>
          </template>
        </el-table-column>
        <el-table-column label="提交时间" align="center" width="200px">
          <template v-slot="scope">
            <span>{{ scope.row.commitTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户账号" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.user }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单金额" align="center" width="100px">
          <template v-slot="scope">
            <span>{{ scope.row.orderAmount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="支付方式" align="center" width="100px">
          <template v-slot="scope">
            <span>{{ scope.row.payWay }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单来源" align="center" width="100px">
          <template v-slot="scope">
            <span>{{ scope.row.orderSource }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" align="center" width="100px">
          <template v-slot="scope">
            <span>{{ scope.row.orderStatus }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px" align="center">
          <el-button size="mini">查看订单</el-button>
          <el-button size="mini" type="danger">删除订单</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-select
          placeholder="批量操作"
          filterable
          size="small"
          v-model="operation_value"
      >
        <el-option
            v-for="item in operation_options"
            :label="item.name"
            :value="item.value"
            :key="item.name"
        >
        </el-option>
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
      order_list: {
        orderNumber: '',
        receiver: '',
        commitTime: '',
        orderStatus: '',
        orderCategory: '',
        orderSource: ''

      },
      orderStatusOptions: [{label: '待付款', value: 1}, {label: '待发货', value: 2}, {label: '已发货', value: 3}, {
        label: '已完成',
        value: 4
      }, {label: '已关闭', value: 5}],
      order_table: [{
        id: 12,
        orderId: '201809150101000001',
        commitTime: '2018-09-15 12:24:27',
        user: 'test',
        orderAmount: '¥18732',
        payWay: '未支付',
        orderSource: 'PC订单',
        orderStatus: '已关闭'
      }, {
        id: 13,
        orderId: '2018091501010000012',
        commitTime: '2018-09-15 12:24:29',
        user: 'test',
        orderAmount: '¥18732',
        payWay: '支付宝',
        orderSource: 'PC订单',
        orderStatus: '待发货'
      }, {
        id: 14,
        orderId: '201809150101000003',
        commitTime: '2018-09-15 12:24:31',
        user: 'test',
        orderAmount: '¥18732',
        payWay: '微信',
        orderSource: 'APP订单',
        orderStatus: '已发货'
      }, {
        id: 15,
        orderId: '201809150101000004',
        commitTime: '2018-09-15 12:24:33',
        user: 'test',
        orderAmount: '¥18732',
        payWay: '微信',
        orderSource: 'PC订单',
        orderStatus: '已完成'
      }, {
        id: 16,
        orderId: '201809150101000005',
        commitTime: '2018-09-15 12:24:35',
        user: 'test',
        orderAmount: '¥18732',
        payWay: '未支付',
        orderSource: 'PC订单',
        orderStatus: '待付款'
      }],
      operation_options: [{label: '批量发货', value: 1}, {label: '关闭订单', value: 2}, {label: '删除订单', value: 3}],
      operation_value: ''
    }
  }
}
</script>

<style scoped>
.order_list_form {
  margin-top: 20px;
}

.input_width {
  width: 220px;
}
.order_list_container{
  padding-left: 20px;
  padding-right: 20px;
}

</style>