<template>
  <div>
    <el-upload list-type="picture-card"
               multiple
               action="#"
               :auto-upload=false
               :file-list="fileList"
               :before-upload="beforeUpload"
               :on-remove="handleDelete"
               :on-success="handleUploadSuccess"
               :on-preview="handlePreview"
    >
      <i slot="default" class="el-icon-upload"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="dialogImageUrl" width="100%">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "multipleupload",
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  props: {
    value: {
      type: Array
    }
  },
  computed: {
    imgName() {
      let imgName = [];
      for (let i = 0; i < this.value.length; i++) {
        let url = this.value[i];
        if (url != null && url != '') {
          imgName.push(url.substr(url.lastIndexOf('/') + 1));
        }
      }
      return imgName;
    },
    fileList() {
      let fileList = [];
      for (let i = 0; i < this.value.length; i++) {
        fileList.push({name: this.imgName[i], url: this.value[i]});
      }
      return fileList;
    }

  },
  methods: {
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file);
    },
    handleUploadSuccess(file) {
      console.log(file);
    },
    handleDelete(file) {
      console.log(file);
    },
    beforeUpload(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>

</style>