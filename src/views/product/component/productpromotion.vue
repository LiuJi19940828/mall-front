<template>
  <div class="product_promotion_container">
    <el-form label-width="120px" size="small" v-model="value">
      <el-form-item label="赠送积分：">
        <el-input size="small" v-model="value.giftPoint"></el-input>
      </el-form-item>
      <el-form-item label="赠送成长值：">
        <el-input size="small" v-model="value.giftGrowth"></el-input>
      </el-form-item>
      <el-form-item label="积分购买限制：">
        <el-input size="small" v-model="value.usePointLimit"></el-input>
      </el-form-item>
      <el-form-item label="预告商品：">
        <el-switch :active-value="1" :inactive-value="0" v-model="value.previewStatus"></el-switch>
      </el-form-item>
      <el-form-item label="商品上架：">
        <el-switch :active-value="1" :inactive-value="0" v-model="value.publishStatus"></el-switch>
      </el-form-item>
      <el-form-item label="商品推荐：">
        <span>新品</span>
        <el-switch :active-value="1" :inactive-value="0" v-model="value.newStatus"
                   style="margin-left: 20px"></el-switch>
        <span style="margin-left: 20px">推荐</span>
        <el-switch :active-value="1" :inactive-value="0" v-model="value.recommandStatus"
                   style="margin-left: 20px"></el-switch>
      </el-form-item>
      <el-form-item label="服务保证：">
        <el-checkbox-group v-model="value.selectServiceList">
          <el-checkbox :label="1">无忧退货</el-checkbox>
          <el-checkbox :label="2">快速退款</el-checkbox>
          <el-checkbox :label="3">免费包邮</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="详细页标题：">
        <el-input size="small" v-model="value.detailTitle"></el-input>
      </el-form-item>
      <el-form-item label="详细页描述：">
        <el-input size="small" v-model="value.detailDesc"></el-input>
      </el-form-item>
      <el-form-item label="商品关键字：">
        <el-input size="small" v-model="value.keywords"></el-input>
      </el-form-item>
      <el-form-item label="商品备注：">
        <el-input type="textarea" resize size="small" v-model="value.note"></el-input>
      </el-form-item>
      <el-form-item label="选择优惠方式：">
        <el-radio-group size="small" v-model="value.promotionType">
          <el-radio-button :label="0">无优惠</el-radio-button>
          <el-radio-button :label="1">特惠促销</el-radio-button>
          <el-radio-button :label="2">会员价格</el-radio-button>
          <el-radio-button :label="3">阶梯价格</el-radio-button>
          <el-radio-button :label="4">满减价格</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-show="value.promotionType ===1">
        <div>
          开始时间：
          <el-date-picker type="date" v-model="value.promotionStartTime"></el-date-picker>
        </div>
        <div style="margin-top: 10px">
          结束时间：
          <el-date-picker type="date" v-model="value.promotionEndTime"></el-date-picker>
        </div>
        <div style="margin-top: 10px">
          促销价格：
          <el-input size="small" placeholder="请输入价格" v-model="value.flashPromotionPrice"
                    style="width: 220px"></el-input>
        </div>
      </el-form-item>
      <el-form-item v-show="value.promotionType ===2">
        <div v-for="(item,index) in value.memberPriceList" :class="{member:index!=0}" :key="item.memberLevelName">
          {{ item.memberLevelName }}：
          <el-input size="small" v-model="item.memberPrice" style="width: 200px"></el-input>
        </div>
      </el-form-item>
      <el-form-item v-show="value.promotionType ===3">
        <el-table size="small" :data="value.productLadderList" border width="80%">
          <el-table-column label="数量" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.count"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="折扣" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.discount"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleDeleteProductLadder(scope.row,scope.$index)">删除
              </el-button>
              <el-button type="text" size="small" @click="handleAddProductLadder(scope.row,scope.$index)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item v-show="value.promotionType ===4">
        <el-table size="small" :data="value.productFullReductionList" border width="80%">
          <el-table-column label="满" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.fullPrice"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="立减" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.reducePrice"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="120">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleRemoveFullReduction(scope.row,scope.$index)">删除
              </el-button>
              <el-button type="text" size="small" @click="handleAddFullReduction(scope.row,scope.$index)">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" @click="handlePre">上一步，填写商品信息</el-button>
        <el-button size="medium" type="primary" @click="handleNext">下一步，填写商品属性</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import {Message} from "element-ui";

export default {
  name: "productpromotion",
  props: {
    isUpdate: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    handleNext() {
      this.$emit('nextStep');
    },
    handlePre() {
      this.$emit('preStep');
    },
    handleAddProductLadder(row, index) {
      console.log(row);
      console.log(index);
      let list = this.value.productLadderList;
      if (list.length < 3) {
        list.push({price: 0, count: 0, discount: 0});
      } else {
        Message({
          type: 'warning',
          message: '最多只能添加三行',
          duration: 3000
        })
      }
    },
    handleDeleteProductLadder(row, index) {
      console.log(row);
      console.log(index);
      let list = this.value.productLadderList;
      if (list.length == 1) {
        list.pop();
        list.push({price: 0, count: 0, discount: 0});
      } else {
        list.splice(index, 1);
      }
    },
    handleAddFullReduction(row, index) {
      console.log(row);
      console.log(index);
      let list = this.value.productFullReductionList;
      if (list.length < 3) {
        list.push({fullPrice: 0, reducePrice: 0});
      } else {
        Message({
          type: 'warning',
          message: '最多只能添加三行',
          duration: 3000
        })
      }
    },
    handleRemoveFullReduction(row, index) {
      console.log(row);
      console.log(index);
      let list = this.value.productFullReductionList;
      if (list.length == 1) {
        list.pop();
        list.push({fullPrice: 0, reducePrice: 0});
      } else {
        list.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped>
.product_promotion_container {
  width: 600px;
  margin-top: 50px;
}

.member {
  margin-top: 10px;
}

</style>