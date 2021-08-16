<template>
  <div class="order_settings_container">
    <el-card class="card_container">
      <el-form label-width="200px" v-model="order_settings_form">
        <el-form-item label="秒杀订单超过：">
          <el-input v-model="order_settings_form.flashOrderOvertime" class="input_width">
            <template slot="append">分</template>
          </el-input>
          <span style="margin-left: 20px">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item label="正常订单超过：">
          <el-input v-model="order_settings_form.normalOrderOvertime" class="input_width">
            <template slot="append">分</template>
          </el-input>
          <span style="margin-left: 20px">未付款，订单自动关闭</span>
        </el-form-item>
        <el-form-item label="发货超过：">
          <el-input v-model="order_settings_form.confirmOvertime" class="input_width">
            <template slot="append">天</template>
          </el-input>
          <span style="margin-left: 20px">未收货，订单自动完成</span>
        </el-form-item>
        <el-form-item label="订单完成超过：">
          <el-input v-model="order_settings_form.finishOvertime" class="input_width">
            <template slot="append">天</template>
          </el-input>
          <span style="margin-left: 20px">自动结束交易，不能申请售后</span>
        </el-form-item>
        <el-form-item label="订单完成超过：">
          <el-input v-model="order_settings_form.commentOvertime" class="input_width">
            <template slot="append">天</template>
          </el-input>
          <span style="margin-left: 20px">自动五星好评</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "settings",
  data() {
    return {
      order_settings_form: {
        flashOrderOvertime: 0,
        normalOrderOvertime: 0,
        confirmOvertime: 0,
        finishOvertime: 0,
        commentOvertime: 0
      }
    }
  }
}
</script>

<style scoped>
.input_width {
  width: 300px;
}
.order_settings_container{
  width: 800px;
  padding: 20px 35px 15px 35px;
}
.card_container{
  padding-top: 35px;
}


</style>