<template>
  <div class="category_add_container">
    <el-card style="width: 800px;padding-top: 20px;padding-right: 10px">
      <el-form label-width="160px" v-model="categoryForm">
        <el-form-item label="分类名称：">
          <el-input v-model="categoryForm.name"></el-input>
        </el-form-item>
        <el-form-item label="上级分类：">
          <el-select v-model="categoryForm.parentId">
            <el-option v-for="item in categoryOptions"
                       :key="item.label"
                       :label="item.label"
                       :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量单位：">
          <el-input v-model="categoryForm.productUnit"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input v-model="categoryForm.sort"></el-input>
        </el-form-item>
        <el-form-item label="是否显示：">
          <el-radio-group v-model="categoryForm.showStatus">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否显示在导航栏：">
          <el-radio-group v-model="categoryForm.navStatus">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类图标：">
          <singleupload v-model="categoryForm.icon"></singleupload>
        </el-form-item>
        <!--        <el-form-item label="筛选属性：">-->
        <!--          <el-cascader separator="/" :options="selectedAttrOptions"></el-cascader>-->
        <!--          <el-button @click="handleDeleteAttr " style="margin-left: 20px">删除</el-button>-->
        <!--          <div>-->
        <!--            <el-button size="small" type="primary" @click="handleAddAttr" style="margin-top: 20px">新增</el-button>-->
        <!--          </div>-->
        <!--        </el-form-item>-->
        <el-form-item label="关键词：">
          <el-input v-model="categoryForm.keywords"></el-input>
        </el-form-item>
        <el-form-item label="分类描述：">
          <el-input v-model="categoryForm.description" type="textarea" :autosize="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="handleReset" style="margin-left: 20px">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Singleupload from "@/components/upload/singleupload";
import {getCategoryParentMenuList, create, getCategory, update} from "@/api/productCate";
import {getAttrList} from "@/api/productAttrCate";
import {Message} from "element-ui";

const defaultCategoryForm = {
  name: '',
  parentId: 0,
  productUnit: '',
  sort: 0,
  showStatus: 0,
  navStatus: 0,
  icon: '',
  keywords: '',
  description: '',
  level: 0
}

export default {
  name: "categorydetail",
  components: {Singleupload},
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
    return {
      categoryForm: Object.assign({}, defaultCategoryForm),
      categoryOptions: [],
      selectedAttrOptions: []
    }
  },
  created() {
    if (this.isUpdate) {
      this.getCategoryForm();
    }
    this.getParentMenuList();
    this.getAttrCategoryAndAttr();
  },
  methods: {
    getCategoryForm() {
      getCategory(this.$route.query.id).then(response => {
        this.categoryForm = response.data.data[0];
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    getParentMenuList() {
      getCategoryParentMenuList().then(response => {
        this.categoryOptions.push({label: '无上级分类', value: 0})
        let list = response.data.data;
        for (let i = 0; i < list.length; i++) {
          this.categoryOptions.push({label: list[i].name, value: list[i].id})
        }
      })
    },
    getAttrCategoryAndAttr() {
      getAttrList().then(response => {
        let list = response.data.data;
        for (let i = 0; i < list.length; i++) {
          let children = [];
          if (list[i].productAttributeList.length > 0) {
            for (let j = 0; j < list[i].productAttributeList.length; j++) {
              children.push({label: list[i].productAttributeList[j].name, value: list[i].productAttributeList[j].id})
            }
          }
          this.selectedAttrOptions.push({label: list[i].name, value: list[i].id, children: children});
        }
      }).catch(error => {
        Message({
          type: 'error',
          message: error.toString(),
          duration: 3000
        })
      })
    },
    handleSubmit() {
      if (this.categoryForm.parentId === 0) {
        this.categoryForm.level = 0;
      } else {
        this.categoryForm.level = 1;
      }
      if (this.isUpdate) {
        update(this.categoryForm).then(response => {
          console.log(response);
        }).catch(error => {
          Message({
            type: 'error',
            message: error.toString(),
            duration: 3000
          })
        })
      } else {
        create(this.categoryForm).then(response => {
          console.log(response);
        }).catch(error => {
          Message({
            type: 'error',
            message: error.toString(),
            duration: 3000
          })
        })
      }
      this.$router.push('/product/category')
    },
    handleReset() {
      this.categoryForm = defaultCategoryForm;
      location.reload();
    }
  }
}
</script>

<style scoped>
.category_add_container {
  padding-left: 20px;
  padding-top: 10px;
}

</style>