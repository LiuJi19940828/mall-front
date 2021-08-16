<template>
  <div class="product_list_container">
    <el-card>
      <div>
        <i class="el-icon-search"></i>
        <span style="font-size: 17px;margin-left: 2px">筛选搜索</span>
        <el-button-group class="button_group">
          <el-button size="small" @click="handleReset">重置</el-button>
          <el-button type="primary" size="small" style="margin-left: 15px" @click="handleSearch">查询结果</el-button>
        </el-button-group>
      </div>
      <div style="margin-top: 20px">
        <el-form :inline="true" v-model="query_form">
          <el-form-item label="输入搜索：" size="small" label-width="140px">
            <el-input size="small" placeholder="商品名称" v-model="query_form.keyword" class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="商品货号：" size="small" label-width="140px">
            <el-input size="small" placeholder="商品货号" v-model="query_form.productSn" class="input_width"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：" size="small" label-width="140px">
            <el-cascader
                size="small"
                separator="/"
                :filterable="true"
                :options="productCategoryOptions"
                v-model="query_form.productCategoryId"
                class="input_width"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="商品品牌：" size="small" label-width="140px">
            <el-select
                size="small"
                v-model="query_form.brandId"
                filterable
                placeholder="请选择品牌"
                class="input_width"
            >
              <el-option v-for="item in productBrandOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态：" size="small" label-width="140px">
            <el-select
                v-model="query_form.publishStatus"
                size="small"
                placeholder="全部"
                class="input_width"
            >
              <el-option v-for="item in put_status_option"
                         :value="item.value"
                         :label="item.label"
                         :key="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：" size="small" label-width="140px">
            <el-select
                v-model="query_form.verifyStatus"
                size="small"
                placeholder="全部"
                class="input_width"
            >
              <el-option v-for="item in validate_option"
                         :value="item.value"
                         :label="item.label"
                         :key="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <div>
        <i class="el-icon-tickets"></i>
        <span style="margin-left: 2px;font-size: 17px">数据列表</span>
        <el-button size="small" style="float: right" @click="handleAdd">添加</el-button>
      </div>
    </el-card>
    <div style="margin-top: 20px">
      <el-table size="small"
                :data="product_table"
                @select="handleSelect"
                border="true"
                width="100%"
                v-loading="isLoading"
                element-loading-text="拼命加载中。"
                element-loading-spinner="el-icon-loading"
      >
        <el-table-column type="selection" width="60px" align="center"></el-table-column>
        <el-table-column label="编号" align="center" width="100px">
          <template v-slot="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="商品图片" align="center" width="120px">
          <template v-slot="scope">
            <img :src="scope.row.pic" style="height: 80px">
          </template>
        </el-table-column>
        <el-table-column label="商品名称" align="center" width="120px">
          <template v-slot="scope">
            <p>{{ scope.row.name }}</p>
            <p>品牌:{{ scope.row.brandName }}</p>
          </template>
        </el-table-column>
        <el-table-column label="价格/货号" align="center" width="120px">
          <template v-slot="scope">
            <p>价格:{{ scope.row.price }}</p>
            <p>货号:{{ scope.row.productSn }}</p>
          </template>
        </el-table-column>
        <el-table-column label="标签" align="center" width="140px">
          <template v-slot="scope">
            <p>上架：
              <el-switch v-model="scope.row.publishStatus" :active-value="1" :inactive-value="0"/>
            </p>
            <p>新品：
              <el-switch v-model="scope.row.newStatus" :active-value="1" :inactive-value="0"/>
            </p>
            <p>推荐：
              <el-switch v-model="scope.row.recommandStatus" :active-value="1" :inactive-value="0"/>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="排序" align="center" width="100px">
          <template v-slot="scope">
            <p>{{ scope.row.sort }}</p>
          </template>
        </el-table-column>
        <el-table-column label="sku库存" align="center" width="100px">
          <template v-slot="scope">
            <el-button type="primary" circle class="el-icon-edit"
                       @click="handleShowSkuEditDialog(scope.$index,scope.row)"></el-button>
          </template>
        </el-table-column>
        <el-table-column label="销量" align="center" width="100px">
          <template v-slot="scope">
            <p>{{ scope.row.sale }}</p>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" align="center" width="100px">
          <template v-slot="scope">
            <p>{{ scope.row.verifyStatus }}</p>
            <p>
              <el-button type="text">审核详情</el-button>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160px" align="center">
          <template v-slot="scope">
            <p>
              <el-button size="mini"
                         @click="handleShowProduct(scope.$index, scope.row)">查看
              </el-button>
              <el-button size="mini"
                         @click="handleUpdateProduct(scope.$index, scope.row)">编辑
              </el-button>
            </p>
            <p>
              <el-button size="mini"
                         @click="handleShowLog(scope.$index, scope.row)">日志
              </el-button>
              <el-button size="mini"
                         type="danger"
                         @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="batch_container">
      <el-select
          placeholder="批量操作"
          filterable
          size="small"
          v-model="operateType"
      >
        <el-option
            v-for="item in operation_options"
            :label="item.name"
            :value="item.value"
            :key="item.name"
        >
        </el-option>
      </el-select>
      <el-button type="primary" size="small" style="margin-left: 15px" @click="handleBatch">确定</el-button>
    </div>
    <div class="pagination_container">
      <el-pagination
          layout="total,sizes,prev,pager,next,jumper"
          :page-sizes="[5,10,15]"
          :page-size="query_form.pageSize"
          :total="total"
          :current-page.sync="query_form.pageNum"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >

      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  fetchList as getProductList,
  updatePublishStatus,
  updateRecommendStatus,
  updateNewStatus,
  updateDeleteStatus
} from "@/api/product";
import {fetchListWithChildren as getProductCateList} from "@/api/productCate";
import {fetchList as getBrandList} from "@/api/brand";
import {Message} from 'element-ui';

const queryFormDefault = {
  keyword: null,
  productSn: null,
  brandId: null,
  publishStatus: null,
  verifyStatus: null,
  productCategoryId: null,
  pageSize: 5,
  pageNum: 1
}

export default {
  name: "product_list",
  data() {
    return {
      total: null,
      isLoading: true,
      product_table: null,
      query_form: Object.assign({}, queryFormDefault),
      put_status_option: [{label: '上架', value: '1'}, {label: '未上架', value: '0'}],
      validate_option: [{label: '审核通过', value: '1'}, {label: '未审核', value: '0'}],
      productBrandOptions: [],
      product_brand: [],
      product_category: {},
      productCategoryOptions: [],
      operateType: null,
      operation_options: [
        {name: '商品上架', value: 'publishOn'}, {name: '商品下架', value: 'publishOff'}, {
          name: '设为推荐',
          value: 'recommendOn'
        }, {name: '取消推荐', value: 'recommendOff'},
        {name: '设为新品', value: 'newOn'}, {name: '取消新品', value: 'newOff'}, {
          name: '转移到分类',
          value: 'transferCategory'
        }, {name: '移入回收站', value: 'recycle'}
      ],
      multipleSelections: null
    }
  },
  created() {
    this.getProductTable();
    this.getProductCateOptions();
    this.getBrandOptions();
  },
  methods: {
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
    },
    getProductTable() {
      getProductList(this.query_form).then(response => {
        this.isLoading = false;
        this.product_table = response.data.data.list;
        this.total = response.data.data.total;
      }).catch(error => {
        Message({
          type: "error",
          message: error.toString(),
          duration: 3000
        })
      })
    },
    handleShowSkuEditDialog(index, row) {
      console.log(index, row)
    },
    handleShowLog(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handleShowProduct(index, row) {
      console.log(index, row)
    },
    handleUpdateProduct(index, row) {
      console.log(row.id);
      this.$router.push({path: '/product/update', query: {id: row.id}});
    },
    handleSizeChange(val) {
      this.query_form.pageNum = 1;
      this.query_form.pageSize = val;
      this.getProductTable();
    },
    handleCurrentChange(val) {
      this.query_form.pageNum = val;
      this.getProductTable();
    },
    handleReset() {
      Object.assign(this.query_form, queryFormDefault)
    },
    handleSearch() {
      getProductList(this.query_form).then(response => {
        this.isLoading = false;
        this.product_table = response.data.data.list;
      }).catch(error => {
        console.log(error)
      })
    },
    handleAdd() {
      this.$router.push('/product/add')
    },
    handleSelect(val) {
      this.multipleSelections = val;
    },
    handleBatch() {
      if (this.operateType == null) {
        Message({
          type: 'error',
          message: '请选择操作类型',
          duration: 3000
        });
        return;
      }
      if (this.multipleSelections == null || this.multipleSelections.length < 1) {
        Message({
          type: 'error',
          message: '请选择要操作的数据',
          duration: 3000
        });
        return;
      }
      this.$confirm('是否进行该批量操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = [];
        for (let i = 0; i < this.multipleSelections.length; i++) {
          ids.push(this.multipleSelections[i].id);
        }
        let publishStatus = 1;
        let recommendStatus = 1;
        let newStatus = 1;
        let deleteStatus = 1;
        switch (this.operateType) {
          case this.operation_options[0].value:
            this.updatePublishStatus(publishStatus, ids);
            break;
          case this.operation_options[1].value:
            publishStatus = 0;
            this.updatePublishStatus(publishStatus, ids);
            break;
          case this.operation_options[2].value:
            this.updateRecommendStatus(recommendStatus, ids);
            break;
          case this.operation_options[3].value:
            recommendStatus = 0;
            this.updateRecommendStatus(recommendStatus, ids);
            break;
          case this.operation_options[4].value:
            this.updateNewStatus(ids, newStatus);
            break;
          case this.operation_options[5].value:
            newStatus = 0;
            this.updateNewStatus(ids, newStatus);
            break;
          case this.operation_options[6].value:
            break;
          case this.operation_options[7].value:
            this.updateDeleteStatus(deleteStatus, ids);
            break;
        }
      });

    },
    updatePublishStatus(publishStatus, ids) {
      let params = new URLSearchParams();
      params.append('publishStatus', publishStatus);
      params.append('ids', ids);
      updatePublishStatus(params).then(response => {
        Message({
          type: 'success',
          message: '修改成功,共修改 ' + response.data.data + '条相关数据',
          duration: 3000
        });
        this.getProductTable();
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    updateRecommendStatus(recommendStatus, ids) {
      let params = new URLSearchParams();
      params.append('ids', ids);
      params.append('recommendStatus', recommendStatus);
      updateRecommendStatus(params).then(response => {
        Message({
          type: 'success',
          message: '修改成功,共修改 ' + response.data.data + '条相关数据',
          duration: 3000
        });
        this.getProductTable();
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      });
    },
    updateNewStatus(ids, newStatus) {
      let params = new URLSearchParams();
      params.append('ids', ids);
      params.append('newStatus', newStatus);
      updateNewStatus(params).then(response => {
        Message({
          type: 'success',
          message: '修改成功,共修改 ' + response.data.data + '条相关数据',
          duration: 3000
        });
        this.getProductTable();
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      });
    },
    updateDeleteStatus(deleteStatus, ids) {
      let params = new URLSearchParams();
      params.append('ids', ids);
      params.append('deleteStatus', deleteStatus);
      updateDeleteStatus(params).then(response => {
        Message({
          type: 'success',
          message: '删除成功，共删除 ' + response.data.data + '条相关数据',
          duration: 3000
        });
        this.getProductTable();
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      });
    }
  }
}
</script>

<style scoped>
.button_group {
  float: right;
}

.batch_container {
  display: inline-block;
  margin-top: 20px;
}

.pagination_container {
  display: inline-block;
  float: right;
  margin-top: 20px;
}

.product_list_container {
  padding-left: 10px;
  padding-right: 10px;
}

.input_width {
  width: 200px;
}
</style>