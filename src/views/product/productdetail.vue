<template>
  <el-card class="form_container">
    <el-steps
        :active="active"
        finish-status="success"
        process-status="process"
        align-center
    >
      <el-step title="填写商品信息">
      </el-step>
      <el-step title="填写商品促销"></el-step>
      <el-step title="填写商品属性"></el-step>
      <el-step title="选择商品关联"></el-step>
    </el-steps>
    <productinfo
        :is-update="isUpdate"
        v-model="productForm"
        v-show="showStatus[0]"
        @nextStep="nextStep"
    ></productinfo>
    <productpromotion
        :is-update="isUpdate"
        v-model="productForm"
        v-show="showStatus[1]"
        @nextStep="nextStep"
        @preStep="preStep"
    ></productpromotion>
    <productattribute
        :is-update="isUpdate"
        v-model="productForm"
        v-show="showStatus[2]"
        @nextStep="nextStep"
        @preStep="preStep"
    ></productattribute>
    <productrelation
        @commit="handleCommit"
        :is-update="isUpdate"
        v-model="productForm"
        v-show="showStatus[3]"
        @nextStep="nextStep"
        @preStep="preStep"
    ></productrelation>
  </el-card>
</template>

<script>
import Productinfo from "@/views/product/component/productinfo";
import Productpromotion from "@/views/product/component/productpromotion";
import Productattribute from "@/views/product/component/productattribute";
import Productrelation from "@/views/product/component/productrelation";
import {getProduct, updateProduct, createProduct} from "@/api/product";
import {Message} from "element-ui";

const defaultProductForm = {
  albumPics: '',
  brandId: null,
  brandName: '',
  deleteStatus: 0,
  description: '',
  detailDesc: '',
  detailHtml: '',
  detailMobileHtml: '',
  detailTitle: '',
  freightTemplateId: 0,
  flashPromotionCount: 0,
  flashPromotionId: 0,
  flashPromotionPrice: 0,
  flashPromotionSort: 0,
  giftPoint: 0,
  giftGrowth: 0,
  keywords: '',
  lowStock: 0,
  name: '',
  newStatus: 0,
  note: '',
  originalPrice: 0,
  pic: '',
  //会员价格{memberLevelId: 0,memberPrice: 0,memberLevelName: null}
  memberPriceList: [],
  //商品满减
  productFullReductionList: [{fullPrice: 0, reducePrice: 0}],
  //商品阶梯价格
  productLadderList: [{count: 0, discount: 0, price: 0}],
  previewStatus: 0,
  price: 0,
  productAttributeCategoryId: null,
  //商品属性相关{productAttributeId: 0, value: ''}
  productAttributeValueList: [],
  //商品sku库存信息{lowStock: 0, pic: '', price: 0, sale: 0, skuCode: '', spData: '', stock: 0}
  skuStockList: [],
  //商品相关专题{subjectId: 0}
  subjectProductRelationList: [],
  //商品相关优选{preferenceAreaId: 0}
  preferenceAreaProductRelationList: [],
  productCategoryId: null,
  productCategoryName: '',
  productSn: '',
  promotionEndTime: '',
  promotionPerLimit: 0,
  promotionPrice: null,
  promotionStartTime: '',
  promotionType: 0,
  publishStatus: 0,
  recommandStatus: 0,
  sale: 0,
  serviceIds: '',
  sort: 0,
  stock: 0,
  subTitle: '',
  unit: '',
  usePointLimit: 0,
  verifyStatus: 0,
  weight: 0
};
export default {
  name: "productDetail",
  components: {Productrelation, Productattribute, Productpromotion, Productinfo},
  data() {
    return {
      active: 0,
      showStatus: [true, false, false, false],
      productForm: Object.assign({}, defaultProductForm)
    }
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (this.isUpdate) {
      console.log(this.$route.query.id);
      getProduct(this.$route.query.id).then(response => {
        this.productForm = response.data.data;
        console.log(this.productForm)
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    }
  },
  methods: {
    hideAll() {
      let length = this.showStatus.length
      for (let i = 0; i < length; i++) {
        this.showStatus[i] = false;
      }
    },
    nextStep() {
      if (this.active < this.showStatus.length - 1) {
        this.active++;
        this.hideAll();
        this.showStatus[this.active] = true;
      }
    },
    preStep() {
      if (this.active > 0) {
        this.active--;
        this.hideAll();
        this.showStatus[this.active] = true;
      }
    },
    handleCommit(isUpdate) {
      this.$confirm('是否要提交该产品?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        if (isUpdate) {
          console.log(this.productForm);
          // eslint-disable-next-line no-unused-vars
          updateProduct(this.$route.query.id, this.productForm).then(response => {
            Message({
              type: 'success',
              message: '提交成功',
              duration: 3000
            });
            this.$router.back();
          }).catch(error => {
            Message({
              type: 'error',
              message: error.toString(),
              duration: 3000
            });
          })
        } else {
          // eslint-disable-next-line no-unused-vars
          createProduct(this.productForm).then(response => {
            Message({
              type: 'success',
              message: '创建成功',
              duration: 3000
            });
            location.reload();
          }).catch(error => {
            Message({
              type: 'error',
              message: error.toString(),
              duration: 3000
            });
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.form_container {
  width: 800px;
  padding: 35px 35px 15px 35px;
  margin: 20px auto;
}

</style>