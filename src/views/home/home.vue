<template>
  <div class="home_container">
    <div class="address_layout">
      <el-row :gutter=20>
        <el-col :span=6>
          <el-card>
            <div slot="header">
              <span class="address_header">后端项目</span>
            </div>
            <div>
              <a href="https://github.com/macrozheng/mall" class="address_content">mall</a>
            </div>
          </el-card>
        </el-col>
        <el-col :span=6>
          <el-card>
            <div slot="header">
              <span class="address_header">前端项目</span>
            </div>
            <div>
              <a href="https://github.com/macrozheng/mall-admin-web" class="address_content">mall-admin-web</a>
            </div>
          </el-card>
        </el-col>
        <el-col :span=6>
          <el-card>
            <div slot="header">
              <span class="address_header">学习教程</span>
            </div>
            <div>
              <a href="https://github.com/macrozheng/mall-learning" class="address_content">mall-learning</a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="total_layout">
      <el-row :gutter=20>
        <el-col span=6>
          <el-card style="height: 100px">
            <img :src=img_home_order class="total_img">
            <div class="total_content">
              <div><span class="total_title">今日订单总数</span></div>
              <div><span class="total_value">2000</span></div>
            </div>
          </el-card>
        </el-col>
        <el-col span=6>
          <el-card style="height: 100px">
            <img :src=img_today_amount class="total_img">
            <div class="total_content">
              <div><span class="total_title">今日销售总额</span></div>
              <div><span class="total_value">500000</span></div>
            </div>
          </el-card>
        </el-col>
        <el-col span=6>
          <el-card style="height: 100px">
            <img :src=img_yesterday_amount class="total_img">
            <div class="total_content">
              <div><span class="total_title">昨日销售总额</span></div>
              <div><span class="total_value">4000000</span></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="transaction_layout">
      <el-row gutter=20>
        <el-card>
          <div slot="header" class="transaction_header">
            <span>待处理事务</span>
          </div>
          <el-row>
            <el-col span=6>
              <div>待付款订单<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
            <el-col span=6 offset=2>
              <div>已完成订单<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
            <el-col span=6 offset=2>
              <div>待确认收货订单<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
          </el-row>
          <el-row>
            <el-col span=6>
              <div>待发货订单<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
            <el-col span=6 offset=2>
              <div>新缺货登记<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
            <el-col span=6 offset=2>
              <div>待处理退款申请<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
          </el-row>
          <el-row>
            <el-col span=6>
              <div>已发货订单<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
            <el-col span=6 offset=2>
              <div>待处理退货订单<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
            <el-col span=6 offset=2>
              <div>广告位即将到期<span class="t_value">(10)</span></div>
              <el-divider class="t_divider"></el-divider>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </div>
    <div class="overview_layout">
      <el-row gutter=20>
        <el-col span="12">
          <el-card>
            <div slot="header">
              <span>商品总览</span>
            </div>
            <el-row>
              <el-col span=5>
                <span class="color_danger">100</span>
              </el-col>
              <el-col span=5>
                <span class="color_danger">400</span>
              </el-col>
              <el-col span=5>
                <span class="color_danger">50</span>
              </el-col>
              <el-col span=5>
                <span class="color_danger">500</span>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px">
              <el-col span=5>
                <span>已下架</span>
              </el-col>
              <el-col span=5>
                <span>已上架</span>
              </el-col>
              <el-col span=5>
                <span>库存紧张</span>
              </el-col>
              <el-col span=5>
                <span>全部商品</span>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col span=12>
          <el-card>
            <div slot="header">
              <span>用户总览</span>
            </div>
            <el-row>
              <el-col span=5>
                <span class="color_danger">100</span>
              </el-col>
              <el-col span=5>
                <span class="color_danger">200</span>
              </el-col>
              <el-col span=5>
                <span class="color_danger">1000</span>
              </el-col>
              <el-col span=5>
                <span class="color_danger">5000</span>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px">
              <el-col span=5>
                <span>今日新增</span>
              </el-col>
              <el-col span=5>
                <span>昨日新增</span>
              </el-col>
              <el-col span=5>
                <span>本月新增</span>
              </el-col>
              <el-col span=5>
                <span>会员总数</span>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="order_layout">
      <el-row gutter=20>
        <el-card>
          <div slot="header">
            <span>订单统计</span>
          </div>
          <el-row>
            <el-col span=4>
              <div>
                <div>
                  <div class="order_content">本月订单总数</div>
                  <div class="order_value">10000</div>
                  <div>
                    <span class="color_success">+10%</span>
                    <span class="order_description">同比上月</span>
                  </div>
                </div>
                <div style="margin-top: 10px">
                  <div class="order_content">本周订单总数</div>
                  <div class="order_value">1000</div>
                  <div>
                    <span class="color_danger">-10%</span>
                    <span class="order_description">同比上周</span>
                  </div>
                </div>
                <div style="margin-top: 10px">
                  <div class="order_content">本月销售总额</div>
                  <div class="order_value">100000</div>
                  <div>
                    <span class="color_success">+10%</span>
                    <span class="order_description">同比上月</span>
                  </div>
                </div>
                <div style="margin-top: 10px">
                  <div class="order_content">本周销售总额</div>
                  <div class="order_value">50000</div>
                  <div>
                    <span class="color_danger">-10%</span>
                    <span class="order_description">同比上周</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col span=20>
              <div style="padding: 10px;border-left: 1px solid #DCDFE6">
                <el-date-picker
                    v-model="orderCountDate"
                    type="daterange"
                    range-separator="至"
                    size="medium"
                    align="right"
                    unlink-panels
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickOptions"
                    style="float: right"
                >
                </el-date-picker>
                <div style="margin-top: 70px">
                  <ve-line
                      :data="chartData"
                      :settings="chartSettings"
                      :loading="loading"
                      :data-empty="dataEmpty"
                  >
                  </ve-line>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </div>

  </div>
</template>

<script>
import img_home_order from '@/assets/home_order.png'
import img_today_amount from '@/assets/home_today_amount.png'
import img_yesterday_amount from '@/assets/home_yesterday_amount.png'

export default {
  name: "home",
  data() {
    return {
      orderCountDate: '',
      loading: false,
      dataEmpty: false,
      chartData: {
        columns: ['date', 'orderCount', 'orderAmount'],
        rows: [
          {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
          {date: '2018-11-02', orderCount: 20, orderAmount: 2230},
          {date: '2018-11-03', orderCount: 33, orderAmount: 3623},
          {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
          {date: '2018-11-05', orderCount: 80, orderAmount: 8492},
          {date: '2018-11-06', orderCount: 60, orderAmount: 6293},
          {date: '2018-11-07', orderCount: 20, orderAmount: 2293},
          {date: '2018-11-08', orderCount: 60, orderAmount: 6293},
          {date: '2018-11-09', orderCount: 50, orderAmount: 5293},
          {date: '2018-11-10', orderCount: 30, orderAmount: 3293},
          {date: '2018-11-11', orderCount: 20, orderAmount: 2293},
          {date: '2018-11-12', orderCount: 80, orderAmount: 8293},
          {date: '2018-11-13', orderCount: 100, orderAmount: 10293},
          {date: '2018-11-14', orderCount: 10, orderAmount: 1293},
          {date: '2018-11-15', orderCount: 40, orderAmount: 4293}
        ]
      },
      chartSettings: {
        area: true,
        xAxisType: "time",
        axisSite: {right: ['orderAmount'], left: ['orderCount']},
        labelMap: {
          'orderCount': '订单数量', 'orderAmount': '订单金额'
        }

      },
      img_home_order,
      img_today_amount,
      img_yesterday_amount,
      pickOptions: {
        firstDayOfWeek: 1,
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            let start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        },
          {
            text: '最近一月',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);

            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一年',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);

            }
          }]
      }
    }
  }
}
</script>

<style scoped>
.home_container {
  width: 800px;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 40px;
}

.address_layout {

}

.address_header {
  font-size: 20px;
  color: dimgrey;
}

.address_content {
  font-size: 18px;
  color: #409EFF;
}

.total_layout {
  margin-top: 20px;
}

.total_img {
  height: 50px;
  width: 50px;
}

.total_title {
  position: relative;
  left: 60px;
  bottom: 50px;
  margin-left: 3px;
  color: #909399;;
}

.total_value {
  position: relative;
  left: 60px;
  bottom: 45px;
  margin-left: 3px;
  color: #606266;
}

.transaction_layout {
  margin-top: 20px;
}

.transaction_header {

}

.t_divider {
  margin-top: 10px;
}

.t_value {
  color: red;
  margin-left: 20px;
}

.overview_layout {
  margin-top: 20px;
}

.color_danger {
  color: red;
  font-size: 24px;
}

.color_success {
  color: green;
  font-size: 24px;
}

.order_layout {
  margin-top: 20px;
}

.order_content {
  color: #909399;
  font-size: 14px
}

.order_value {
  color: #606266;
  font-size: 24px;
  padding: 10px 0
}

.order_description {
  color: #C0C4CC;
  font-size: 14px;
  margin-left: 2px;
}

</style>