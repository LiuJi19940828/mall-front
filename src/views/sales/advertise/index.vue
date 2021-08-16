<template>
  <div class="advertise_list_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 10px;font-size: 17px">筛选搜索</span>
      <el-button-group style="float: right">
        <el-button size="small">重置</el-button>
        <el-button size="small" type="primary" style="margin-left: 20px">查询搜索</el-button>
      </el-button-group>
      <div style="margin-top: 20px">
        <el-form size="small" label-width="140px" inline v-model="advertise_form">
          <el-form-item label="广告名称：">
            <el-input size="small" placeholder="广告名称" v-model="advertise_table.name" class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="广告位置：">
            <el-select v-model="advertise_form.position" placeholder="全部" size="small" class="input_width">
              <el-option label="PC首页轮播" value="0"></el-option>
              <el-option label="APP首页轮播" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="到期时间：">
            <el-date-picker type="date" placeholder="请选择时间" v-model="advertise_form.date"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 2px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">添加广告</el-button>
    </el-card>
    <div style="margin-top: 20px">
      <el-table
          :data="advertise_table"
          border="true"
          width="100%"
      >
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column label="编号" align="center">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="广告名称" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="广告位置" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.position == 0">PC首页轮播</span>
            <span v-else>APP首页轮播</span>
          </template>
        </el-table-column>
        <el-table-column label="广告图片" align="center" width="180px">
          <template v-slot="scope">
            <img :src="scope.row.pic" class="img">
          </template>
        </el-table-column>
        <el-table-column label="时间" align="center" width="230px">
          <template v-slot="scope">
            <span>开始时间：{{ scope.row.start }}</span>
            <span>结束时间：{{ scope.row.end }}</span>
          </template>
        </el-table-column>
        <el-table-column label="上线/下线" align="center" width="100px">
          <template v-slot="scope">
            <span v-if="scope.row.status == 0">下线</span>
            <span v-else>上线</span>
          </template>
        </el-table-column>
        <el-table-column label="点击次数" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.count }}</span>
          </template>
        </el-table-column>
        <el-table-column label="生成订单" align="center">
          <template v-slot="scope">
            <span>{{ scope.row.orderCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px" align="center">
          <el-button size="small">编辑</el-button>
          <el-button size="small">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-select size="small" v-model="operation_value">
        <el-option label="删除" value="1"></el-option>
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
      advertise_form: {name: '', position: '', date: ''},
      advertise_table: [{
        id: 9,
        name: '电影广告推荐',
        position: 0,
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/movie_ad.jpg',
        start: '2018-11-01 00:00:00',
        end: '2018-11-04 00:00:00',
        count: 200,
        status: 1,
        orderCount: 100
      }, {
        id: 10,
        name: '汽车促销广告',
        position: 0,
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/car_ad.jpg',
        start: '2018-11-13 00:00:00',
        end: '2018-11-23 00:00:00',
        count: 0,
        status: 1,
        orderCount: 0
      }, {
        id: 11,
        name: '汽车推荐广告',
        position: 0,
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/car_ad2.jpg',
        start: '2018-11-13 00:00:00',
        end: '2018-11-23 00:00:00',
        count: 0,
        status: 1,
        orderCount: 0
      }, {
        id: 2,
        name: '夏季大促销',
        position: 0,
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg',
        start: '2018-11-01 00:00:00',
        end: '2018-11-15 00:00:00',
        count: 200,
        status: 1,
        orderCount: 20
      }, {
        id: 3,
        name: '夏季大促销2',
        position: 0,
        pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg',
        start: '2018-6-01 00:00:00',
        end: '2018-6-30 00:00:00',
        count: 0,
        status: 1,
        orderCount: 0
      }],
      operation_value: ''
    }
  }
}
</script>

<style scoped>
.advertise_list_container {
  padding-right: 20px;
  padding-left: 20px;
}

.input_width {
  width: 220px;
}
.img{
  height: 50px;
  object-fit: contain;
}

</style>