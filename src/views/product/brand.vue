<template>
  <div class="brand_container">
    <el-card>
      <i class="el-icon-search"></i>
      <span style="margin-left: 6px;font-size: 17px">筛选搜索</span>
      <el-button type="primary" size="small" style="float: right">查询结果</el-button>
      <div style="margin-top: 15px">
        <el-form label-width="140px" size="small" :model="brandForm">
          <el-form-item label="输入搜索：">
            <el-input placeholder="品牌名称/关键字" v-model="brandForm.brandName" size="small" style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span style="margin-left: 10px;font-size: 17px">数据列表</span>
      <el-button size="small" style="float: right">添加</el-button>
    </el-card>
    <div class="brand_table_container">
      <el-table border :data="brandTable" width="100%">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="编号" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column label="品牌名称" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.brandName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="品牌首字母" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.brandFL }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.sort }}</span>
          </template>
        </el-table-column>
        <el-table-column label="品牌制造商" align="center" width="100px">
          <template slot-scope="scope">
            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.isManufacturer"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" align="center" width="100px">
          <template slot-scope="scope">
            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.isShow"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="相关" align="center" width="200px">
          <template slot-scope="scope">
            <span>商品：</span><span style="color: #409EFF">{{ scope.row.productCount }}</span>
            <span style="margin-left: 10px">评价：</span><span style="color: #409EFF">{{ scope.row.comment }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="200px">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-select size="small"
                 filterable
                 v-model="selectedOperation"
                 placeholder="批量操作"
      >
        <el-option label="显示品牌" value="showBrand"></el-option>
        <el-option label="隐藏品牌" value="hideBrand"></el-option>
      </el-select>
      <el-button size="small" type="primary" style="margin-left: 20px">确定</el-button>
      <el-pagination :total="5"
                     :page-size="5"
                     :page-sizes="[5,10,15]"
                     layout="total,sizes,prev,pager,next,jumper"
                     background
                     style="float: right"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      brandForm: {
        brandName: ''
      },
      brandTable: [
        {
          number: 6,
          brandName: '小米',
          brandFL: 'M',
          sort: 500,
          isManufacturer: 1,
          isShow: 1,
          productCount: 100,
          comment: 1000
        },
        {
          number: 49,
          brandName: '七匹狼',
          brandFL: 'S',
          sort: 200,
          isManufacturer: 1,
          isShow: 1,
          productCount: 100,
          comment: 1000
        },
        {
          number: 50,
          brandName: '海澜之家',
          brandFL: 'H',
          sort: 200,
          isManufacturer: 1,
          isShow: 1,
          productCount: 100,
          comment: 100
        },
        {
          number: 51,
          brandName: '苹果',
          brandFL: 'A',
          sort: 200,
          isManufacturer: 1,
          isShow: 1,
          productCount: 100,
          comment: 100
        },
        {
          number: 2,
          brandName: '三星',
          brandFL: 'S',
          sort: 200,
          isManufacturer: 1,
          isShow: 1,
          productCount: 100,
          comment: 100
        },
      ],
      selectedOperation: ''
    }
  }
}
</script>

<style scoped>
.brand_table_container {
  margin-top: 20px;
}
.brand_container{
  padding-left: 15px;
  padding-right: 15px;
}

</style>