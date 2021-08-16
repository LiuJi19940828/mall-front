<template>
  <div class="product_relation_container">
    <el-form label-width="120px" size="small" v-model="value">
      <el-form-item label="关联专题：">
        <el-transfer v-model="selectSubject"
                     :data="subjectList"
                     :titles="['待选择','已选择']"
                     filterable
                     :format="{
                       unchecked:'${checked}/${total}',
                       hasChecked:'${checked}/${total}'
                     }"
                     filter-placeholder="请输入专题名称"
        >
        </el-transfer>
      </el-form-item>
      <el-form-item label="关联优选：">
        <el-transfer v-model="selectPreferenceArea"
                     :data="preferenceAreaList"
                     :titles="['待选择','已选择']"
                     filterable
                     filter-placeholder="请输入优选名称"
        ></el-transfer>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" @click="handlePrev">上一步，填写商品属性</el-button>
        <el-button size="medium" type="primary" @click="handleSubmit">完成，提交商品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {fetchListAll as fetchPreferenceAreaList} from "@/api/preferenceArea";
import {fetchListALL as fetchSubjectList} from "@/api/subject";
import {Message} from "element-ui";

export default {
  name: "productrelation",
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
      subjectList: [],
      preferenceAreaList: []
    }
  },
  computed: {
    //选中的专题
    selectSubject: {
      get: function () {
        let subjects = [];
        if (this.value.subjectProductRelationList == null || this.value.subjectProductRelationList.length <= 0) {
          return subjects;
        }
        for (let i = 0; i < this.value.subjectProductRelationList.length; i++) {
          subjects.push(this.value.subjectProductRelationList[i].subjectId);
        }
        return subjects;
      },
      set: function (newValue) {
        this.value.subjectProductRelationList = [];
        for (let i = 0; i < newValue.length; i++) {
          this.value.subjectProductRelationList.push({subjectId: newValue[i]});
        }
      }
    },
    //选中的优选
    selectPreferenceArea: {
      get: function () {
        let preferenceAreas = [];
        if (this.value.preferenceAreaProductRelationList == null || this.value.preferenceAreaProductRelationList.length <= 0) {
          return preferenceAreas;
        }
        for (let i = 0; i < this.value.preferenceAreaProductRelationList.length; i++) {
          preferenceAreas.push(this.value.preferenceAreaProductRelationList[i].preferenceAreaId);
        }
        return preferenceAreas;
      },
      set: function (newValue) {
        this.value.preferenceAreaProductRelationList = [];
        for (let i = 0; i < newValue.length; i++) {
          this.value.preferenceAreaProductRelationList.push({preferenceAreaId: newValue[i]});
        }
      }
    }
  },
  created() {
    this.getSubjectList();
    this.getPreferenceAreaList();
  },
  methods: {
    handlePrev() {
      this.$emit('preStep')
    },
    handleSubmit() {
      this.$emit('commit', this.isUpdate);
    },
    getSubjectList() {
      fetchSubjectList().then(response => {
        let options = response.data.data;
        for (let i = 0; i < options.length; i++) {
          this.subjectList.push({label: options[i].title, key: options[i].id});
        }
      }).catch(error => {
        Message({
          type: 'error',
          duration: 3000,
          message: error.toString()
        })
      })
    },
    getPreferenceAreaList() {
      fetchPreferenceAreaList().then(response => {
        let options = response.data.data;
        for (let i = 0; i < options.length; i++) {
          this.preferenceAreaList.push({label: options[i].name, key: options[i].id});
        }
      }).catch(error => {
        Message({
          type: 'error',
          duration: 3000,
          message: error.toString()
        })
      })
    }

  }
}
</script>

<style scoped>
.product_relation_container {
  margin-top: 50px;
}

</style>