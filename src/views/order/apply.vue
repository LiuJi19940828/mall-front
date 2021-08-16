<template>
  <div class="order_apply_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div class="apply_form">
        <el-form size="small" label-width="120px" inline v-model="apply_form">
          <el-form-item label="输入搜索：">
            <el-input size="small" placeholder="服务单号" v-model="apply_form.id" class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="处理状态：">
            <el-select placeholder="全部" v-model="apply_form.status" class="input_width">
              <el-option v-for="item in status"
                         :label="item.label"
                         :value="item.value"
                         :key="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申请时间：">
            <el-date-picker type="date" placeholder="请选择时间" size="small" class="input_width"
                            v-model="apply_form.applyTime"></el-date-picker>
          </el-form-item>
          <el-form-item label="操作人员：">
            <el-input v-model="apply_form.user" size="small" placeholder="全部" class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="处理时间：">
            <el-date-picker size="small" placeholder="请选择时间" v-model="apply_form.handleTime" type="date"
                            class="input_width"></el-date-picker>
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
          :data="apply_table"
          border="true"
          width="100%"
      >
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column label="服务单号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" align="center" width="180px">
          <template v-slot="scope">
            <span>{{ scope.row.applyTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户账号" align="center" width="60px">
          <template v-slot="scope">
            <span>{{ scope.row.user }}</span>
          </template>
        </el-table-column>
        <el-table-column label="退款金额" align="center" width="120px">
          <template v-slot="scope">
            <span>{{ scope.row.refundAmount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请状态" align="center" width="120px">
          <template v-slot="scope">
            <span>{{ scope.row.applyStatus }}</span>
          </template>
        </el-table-column>
        <el-table-column label="处理时间" align="center" width="180px">
          <template v-slot="scope">
            <span>{{ scope.row.handleTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px" align="center">
          <el-button size="mini">查看详情</el-button>
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
            label="批量删除"
            value="1"
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
  name: "apply",
  data() {
    return {
      apply_form: {
        id: '',
        status: '',
        applyTime: '',
        user: '',
        handleTime: ''
      },
      status: [{label: '待处理', value: 1}, {label: '退货中', value: 2}, {label: '已完成', value: 3}, {label: '已拒绝', value: 4}],
      apply_table: [{
        id: '3',
        applyTime: '2018-10-17 14:34:57',
        user: 'test',
        refundAmount: '¥2000.20',
        applyStatus: '待处理',
        handleTime: '2018-10-18 13:54:10'
      }, {
        id: '4',
        applyTime: '2018-10-17 14:35:57',
        user: 'test',
        refundAmount: '¥3435.20',
        applyStatus: '退货中',
        handleTime: '2018-10-20 13:03:10'
      }, {
        id: '5',
        applyTime: '2018-10-14 18:34:57',
        user: 'test',
        refundAmount: '¥200321.20',
        applyStatus: '已完成',
        handleTime: '2018-10-18 23:54:10'
      }, {
        id: '6',
        applyTime: '2018-10-23 12:34:57',
        user: 'test',
        refundAmount: '¥300.00',
        applyStatus: '已拒绝',
        handleTime: '2018-10-24 13:54:10'
      }],
      operation_value: '',

    }
  }
}
</script>

<style scoped>
.input_width {
  width: 220px;
}

.apply_form {
  margin-top: 20px;
}

.order_apply_container {
  padding-left: 20px;
  padding-right: 20px;
}
</style>