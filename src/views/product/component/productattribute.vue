<template>
  <div class="product_attr_container">
    <el-form size="small" label-width="120px" v-model="value">
      <el-form-item label="属性类型：">
        <el-select size="small"
                   v-model="value.productAttributeCategoryId"
                   @change="handleProductAttrCateChange">
          <el-option v-for="item in productAttrCategoryOptions"
                     :value="item.value"
                     :label="item.label"
                     :key="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品规格：">
        <el-card class="cardBg">
          <div v-for="(productAttr,idx) in selectProductAttr" :key="idx">
            {{ productAttr.name }}：
            <div v-if="productAttr.handAddStatus == 0">
              <el-checkbox-group v-model="selectProductAttr[idx].values" class="littleMarginLeft">
                <el-checkbox v-for="item in getInputListArr(productAttr.inputList)" :label="item"
                             :key="item"
                ></el-checkbox>
              </el-checkbox-group>
            </div>
            <div v-else>
              <el-checkbox-group v-model="selectProductAttr[idx].values">
                <div v-for="(item,index) in selectProductAttr[idx].options" style="display: inline-block"
                     class="littleMarginLeft" :key="index">
                  <el-checkbox :label="item" :key="item"></el-checkbox>
                  <el-button type="text" class="littleMarginLeft" @click="handleRemoveProductAttrValue(idx,index)">删除
                  </el-button>
                </div>
              </el-checkbox-group>
              <el-input v-model="addProductAttrValue" style="width: 160px;margin-left: 10px" clearable></el-input>
              <el-button class="littleMarginLeft" @click="handleAddProductAttrValue(idx)">增加</el-button>
            </div>
          </div>
        </el-card>
        <el-table style="margin-top: 20px;width: 100%" size="small" :data="value.skuStockList" border>
          <el-table-column
              v-for="(item,index) in selectProductAttr"
              :label="item.name"
              :key="item.id"
              align="center"
          >
            <template slot-scope="scope">
              {{ getProductSkuSp(scope.row, index) }}
            </template>
          </el-table-column>
          <el-table-column
              label="销售价格"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="商品库存"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.stock"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="库存预警值"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.lowStock"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="SKU编号"
              align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.skuCode"></el-input>
            </template>
          </el-table-column>
          <el-table-column
              label="操作"
              width="80"
              align="center">
            <template slot-scope="scope">
              <el-button
                  type="text"
                  @click="handleRemoveProductSku(scope.$index)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button-group style="margin-top: 20px">
          <el-button type="primary" size="small" @click="handleRefreshProductSkuList">刷新列表</el-button>
          <el-button type="primary" size="small" style="margin-left: 10px" @click="handleSyncProductSkuPrice">同步价格
          </el-button>
          <el-button type="primary" size="small" style="margin-left: 10px" @click="handleSyncProductSkuStock">同步库存
          </el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item label="属性图片：" v-if="hasAttrPic">
        <el-card class="cardBg">
          <singleupload v-for="item in selectProductAttrPics"
                        :value="item.pic"
                        :key="item.name"
                        :name="item.name"
                        style="margin-top: 10px"
          ></singleupload>
        </el-card>
      </el-form-item>
      <el-form-item label="商品参数：">
        <el-card class="cardBg">
          <div v-for="(item,index) in selectProductParam" :key="index" :class="{littleMarginTop:index>0}">
            <div class="paramInputLabel">{{ item.name }}:</div>
            <el-select v-if="item.inputType == 1" v-model="selectProductParam[index].value" style="width: 240px">
              <el-option v-for="option in getParamInputList(item.inputList)"
                         :label="option"
                         :value="option"
                         :key="option"
              ></el-option>
            </el-select>
            <el-input v-else class="paramInput" v-model="selectProductParam[index].value"></el-input>
          </div>
        </el-card>
      </el-form-item>
      <el-form-item label="商品相册：">
        <multipleupload v-model="selectProductPics"></multipleupload>
      </el-form-item>
      <el-form-item label="规格参数：">
        <el-tabs type="card" v-model="activeHtmlName">
          <el-tab-pane label="电脑端详情" name="pc"></el-tab-pane>
          <el-tab-pane label="移动端详情" name="mobile"></el-tab-pane>
        </el-tabs>

      </el-form-item>
      <el-form-item>
        <el-button size="medium" @click="handlePre">上一步，填写商品促销</el-button>
        <el-button size="medium" type="primary" @click="handleNext">下一步，填写商品关联</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Multipleupload from "@/components/upload/multipleupload";
import {fetchList as getProductAttrCates} from "@/api/productAttrCate";
import {Message} from "element-ui";
import {fetchListByProductAttrCateId as getListByProductAttrCateId} from "@/api/productAttr";
import Singleupload from "@/components/upload/singleupload";

export default {
  name: "productattribute",
  props: {
    isUpdate: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
    }
  },
  components: {Singleupload, Multipleupload},
  data() {
    return {
      productAttrCategoryId: '',
      productAttrCategoryOptions: [],
      activeHtmlName: 'pc',
      selectProductAttr: [],
      selectProductParam: [],
      addProductAttrValue: null,
      selectProductAttrPics: []
    }
  },
  created() {
    this.getProductAttrCateList();
  },
  computed: {
    productId() {
      return this.value.id;
    },
    hasAttrPic() {
      if (this.selectProductAttrPics.length < 1) {
        return false;
      }
      return true;
    },
    selectProductPics: {
      get: function () {
        let pics = [];
        if (this.value.pic === undefined || this.value.pic == null || this.value.pic === '') {
          return pics;
        }
        pics.push(this.value.pic);
        if (this.value.albumPics === undefined || this.value.albumPics == null || this.value.albumPics === '') {
          return pics;
        }
        let albumPics = this.value.albumPics.split(',');
        for (let i = 0; i < albumPics.length; i++) {
          pics.push(albumPics[i]);
        }
        return pics;
      },
      set: function (newValue) {
        if (newValue == null || newValue.length === 0) {
          this.value.pic = null;
          this.value.albumPics = null;
        } else {
          this.value.pic = newValue[0];
          this.value.albumPics = '';
          if (newValue.length > 1) {
            for (let i = 1; i < newValue.length; i++) {
              this.value.albumPics += newValue[i];
              if (i !== newValue.length - 1) {
                this.value.albumPics += ',';
              }
            }
          }
        }
      }
    }
  },
  watch: {
    productId: function () {
      if (this.value.productAttributeCategoryId != null) {
        this.handleProductAttrCateChange(this.value.productAttributeCategoryId);
      }
    }
  },
  methods: {
    handlePre() {
      this.$emit('preStep')
    },
    handleNext() {
      this.$emit('nextStep')
    },
    getProductAttrCateList() {
      let param = {pageSize: 100, pageNum: 1};
      getProductAttrCates(param).then(response => {
        let list = response.data.data.list;
        for (let i = 0; i < list.length; i++) {
          this.productAttrCategoryOptions.push({label: list[i].name, value: list[i].id})
        }
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    handleProductAttrCateChange(val) {
      this.getProductAttrList(val, 0);
      this.getProductAttrList(val, 1);
    },
    getProductAttrList(val, type) {
      let params = {pageSize: 100, pageNum: 1, type: type};
      getListByProductAttrCateId(val, params).then(response => {
        let list = response.data.data.list;
        if (type == 0) {
          this.selectProductAttr = [];
          for (let i = 0; i < list.length; i++) {
            let options = [];
            let values = [];
            if (this.isUpdate) {
              if (list[i].handAddStatus === 1) {
                //编辑状态下获取手动添加编辑属性
                options = this.getEditAttrOptions(list[i].id);
              }
              //编辑状态下获取选中属性
              values = this.getEditAttrValues(i);
            }
            this.selectProductAttr.push({
              id: list[i].id,
              name: list[i].name,
              handAddStatus: list[i].handAddStatus,
              inputList: list[i].inputList,
              values: values,
              options: options
            });
            if (this.isUpdate) {
              //编辑模式下刷新商品属性图片
              this.refreshProductAttrPics();
            }
          }
          console.log(this.selectProductAttr);
        } else {
          this.selectProductParam = [];
          for (let i = 0; i < list.length; i++) {
            let value = null;
            if (this.isUpdate) {
              //编辑模式下获取参数属性
              value = this.getEditParamValue(list[i].id);
            }
            this.selectProductParam.push({
              id: list[i].id,
              name: list[i].name,
              value: value,
              inputType: list[i].inputType,
              inputList: list[i].inputList
            });
          }
          // console.log(this.sel)
        }
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    getInputListArr(inputList) {
      return inputList.split(',');
    },
    handleRemoveProductAttrValue(idx, index) {
      let options = this.selectProductAttr[idx].options;
      options.splice(index, 1);
    },
    handleAddProductAttrValue(idx) {
      let options = this.selectProductAttr[idx].options;
      if (this.addProductAttrValue == null || this.addProductAttrValue == '') {
        Message({
          message: '属性值不能为空',
          type: 'warning',
          duration: 1000
        });
        return
      }
      if (options.indexOf(this.addProductAttrValue) !== -1) {
        Message({
          message: '属性值不能重复',
          type: 'warning',
          duration: 1000
        });
        return;
      }
      this.selectProductAttr[idx].options.push(this.addProductAttrValue);
      this.addProductAttrValue = null;
    },
    getProductSkuSp(row, index) {
      let spData = JSON.parse(row.spData);
      if (spData != null) {
        switch (index) {
          case 0:
            return spData.sp1;
          case 1:
            return spData.sp2;
          case 3:
            return spData.sp3;
        }
      } else {
        return null;
      }
    },
    handleRemoveProductSku(index) {
      let list = this.value.skuStockList;
      if (list.length == 1) {
        list.pop();
        return;
      }
      list.splice(index, 1)
    },
    handleSyncProductSkuStock() {
      this.$confirm("将同步第一个sku库存到所有sku，是否继续", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let list = this.value.skuStockList;
        this.value.skuStockList = [];
        let tempList = [];
        tempList = tempList.concat(list);
        let stock = tempList[0].stock;
        let lowStock = tempList[0].lowStock;
        for (let i = 0; i < tempList.length; i++) {
          tempList[i].stock = stock;
          tempList[i].lowStock = lowStock;
        }
        this.value.skuStockList = this.value.skuStockList.concat(tempList);
      })
    },
    handleSyncProductSkuPrice() {
      this.$confirm("将同步第一个sku价格到所有sku，是否继续", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let list = this.value.skuStockList;
        this.value.skuStockList = [];
        let tempList = [];
        tempList = tempList.concat(list);
        let price = tempList[0].price;
        for (let i = 0; i < tempList.length; i++) {
          tempList[i].price = price;
        }
        this.value.skuStockList = this.value.skuStockList.concat(tempList);
      })
    },
    getEditAttrOptions(id) {
      let options = [];
      for (let i = 0; i < this.value.productAttributeValueList.length; i++) {
        let attrValue = this.value.productAttributeValueList[i];
        if (attrValue.productAttributeId === id) {
          let strArr = attrValue.value.split(',');
          for (let j = 0; j < strArr.length; j++) {
            options.push(strArr[j]);
          }
          break;
        }
      }
      return options;
    },
    getEditAttrValues(index) {
      let values = new Set();
      if (index === 0) {
        for (let i = 0; i < this.value.skuStockList.length; i++) {
          let sku = this.value.skuStockList[i];
          let spData = JSON.parse(sku.spData);
          if (spData != null) {
            values.add(spData.sp1);
          }
        }
      } else if (index === 1) {
        for (let i = 0; i < this.value.skuStockList.length; i++) {
          let sku = this.value.skuStockList[i];
          let spData = JSON.parse(sku.spData);
          if (spData != null) {
            values.add(spData.sp2);
          }
        }
      } else {
        for (let i = 0; i < this.value.skuStockList.length; i++) {
          let sku = this.value.skuStockList[i];
          let spData = JSON.parse(sku.spData);
          if (spData != null) {
            values.add(spData.sp3);
          }
        }
      }
      return Array.from(values);
    },
    getEditParamValue(id) {
      for (let i = 0; i < this.value.productAttributeValueList.length; i++) {
        if (id === this.value.productAttributeValueList[i].productAttributeId) {
          return this.value.productAttributeValueList[i].value;
        }
      }
    },
    getProductSkuPic(name) {
      for (let i = 0; i < this.value.skuStockList.length; i++) {
        let spData = JSON.parse(this.value.skuStockList[i].spData);
        if (name === spData.sp1) {
          return this.value.skuStockList[i].pic;
        }
      }
      return null;
    },
    refreshProductAttrPics() {
      this.selectProductAttrPics = [];
      if (this.selectProductAttr.length >= 1) {
        let values = this.selectProductAttr[0].values;
        for (let i = 0; i < values.length; i++) {
          let pic = null;
          if (this.isUpdate) {
            //编辑状态下获取图片
            pic = this.getProductSkuPic(values[i]);
          }
          this.selectProductAttrPics.push({name: values[i], pic: pic})
        }
      }
    },
    getParamInputList(list) {
      return list.split(',');
    },
    handleRefreshProductSkuList() {
      this.$confirm('刷新列表将导致sku信息重新生成，是否要刷新？', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.refreshProductAttrPics();
        this.refreshProductSkuList();
      })
    },
    refreshProductSkuList() {
      let skuList = this.value.skuStockList;
      let tempList = [];
      for (let i = 0; i < skuList.length; i++) {
        tempList.push({spData: skuList[i].spData});
      }
      this.value.skuStockList = tempList;
    },

  }
}
</script>

<style scoped>
.product_attr_container {
  width: 600px;
  margin-top: 50px;
}

.littleMarginLeft {
  margin-left: 10px;
}

.littleMarginTop {
  margin-top: 15px;
}

.paramInputLabel {
  display: inline-block;
  width: 100px;
  text-align: right;
  padding-right: 10px
}

.paramInput {
  width: 240px;
}

.cardBg {
  background: #F8F9FC;
}
</style>