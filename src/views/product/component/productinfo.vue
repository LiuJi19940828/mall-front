<template>
  <div class="product_info_container">
    <el-form label-width="120px" v-model="value">
      <el-form-item label="商品分类：">
        <el-cascader
            size="small"
            filterable
            :options="productCategoryOptions"
            v-model="value.productCategoryId"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="商品名称：">
        <el-input size="small" v-model="value.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题：">
        <el-input size="small" v-model="value.subTitle"></el-input>
      </el-form-item>
      <el-form-item label="商品品牌：">
        <el-select size="small" v-model="value.brandId">
          <el-option v-for="item in productBrandOptions"
                     :label="item.label"
                     :value="item.value"
                     :key="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品介绍：">
        <el-input resize="true" placeholder="请输入内容" v-model="value.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="商品货号：">
        <el-input size="small" v-model="value.productSn"></el-input>
      </el-form-item>
      <el-form-item label="商品售价：">
        <el-input size="small" v-model="value.price"></el-input>
      </el-form-item>
      <el-form-item label="市场价：">
        <el-input size="small" v-model="value.originalPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品库存：">
        <el-input size="small" v-model="value.stock"></el-input>
      </el-form-item>
      <el-form-item label="计量单位：">
        <el-input size="small" v-model="value.unit"></el-input>
      </el-form-item>
      <el-form-item label="商品重量：">
        <el-input size="small" v-model="value.weight" style="width: 300px"></el-input>
        <span style="margin-left: 20px">克</span>
      </el-form-item>
      <el-form-item label="排序：">
        <el-input size="small" v-model="value.sort"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" type="primary" style="margin-left: 120px" @click="handleNext">下一步，填写商品促销</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import {Message} from "element-ui";
import {fetchListWithChildren as getProductCateList} from "@/api/productCate";
import {fetchList as getBrandList} from "@/api/brand";

export default {
  name: "product_info",
  props: {
    isUpdate: {
      type: Boolean,
      default: false
    },
    value: Object
  },
  data() {
    return {
      // productInfoForm: {
      //   productCategoryId: null,
      //   name: null,
      //   subTitle: null,
      //   brandId: null,
      //   description: null,
      //   productSn: null,
      //   price: null,
      //   originalPrice: null,
      //   stock: null,
      //   unit: null,
      //   weight: null,
      //   sort: null
      // },
      productCategoryOptions: [],
      productBrandOptions: []
    }
  },
  created() {
    this.getProductCateOptions();
    this.getBrandOptions();
  },
  methods: {
    handleNext() {
      this.$emit('nextStep')
    },
    getBrandOptions() {
      getBrandList().then(response => {
        let list = response.data;
        for (let i = 0; i < list.length; i++) {
          this.productBrandOptions.push({label: list[i].name, value: list[i].id})
        }
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    getProductCateOptions() {
      getProductCateList().then(response => {
        let list = response.data;
        for (let i = 0; i < list.length; i++) {
          let children = [];
          if (list[i].children != null && list[i].children.length > 0) {
            for (let j = 0; j < list[i].children.length; j++) {
              children.push({label: list[i].children[j].name, value: list[i].children[j].id})
            }
          }
          this.productCategoryOptions.push({label: list[i].name, value: list[i].id, children: children})
        }
        console.log(this.productCategoryOptions)
      }).catch(error => {
        Message({
          type: "error",
          message: error.toString(),
          duration: 3000
        })
      })
    }
  }
}
</script>

<style scoped>
.product_info_container {
  width: 600px;
  margin-top: 50px;
}
</style>