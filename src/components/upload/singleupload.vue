<template>
  <div>
    <el-upload
        action="#"
        :file-list="fileList"
        list-type="picture"
        :auto-upload="false"
    >
      <el-button type="primary" size="small">点击上传</el-button>
      <div slot="tip" class="el-upload__tip"><span style="font-size: 15px">{{ name }}：</span>只能上传jpg/png文件，且不超过10M</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="fileList[0].url" width="100%">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "singleupload",
  data() {
    return {
      dialogVisible: false
    }
  },
  props: {
    value: {
      type: Array
    },
    name: {}
  },
  computed: {
    imageUrl() {
      return this.value;
    },
    imageName() {
      if (this.value != null && this.value !== '') {
        return this.value.substr(this.value.lastIndexOf("/") + 1);
      } else {
        return null;
      }
    },
    fileList() {
      return [{
        name: this.imageName,
        url: this.imageUrl
      }]
    }
  }
}
</script>

<style scoped>

</style>