<template>
  <el-menu class="header" mode="horizontal">
    <img :src="img_menu_folder" class="folder_icon"/>
    <breadcrumb class="breadcrumb"></breadcrumb>
    <userinfo></userinfo>
  </el-menu>
</template>

<script>
import Userinfo from "@/components/userinfo/userinfo";
import Breadcrumb from '@/components/breadcrumb/breadcrumb'
import img_menu_folder from '@/assets/menu_folder.jpg'


export default {
  name: "app_header",
  components: {Userinfo, Breadcrumb},
  data() {
    return {
      img_menu_folder
    }
  }
}
</script>

<style scoped>
.header {
  height: 50px;
}

.breadcrumb {
  position: relative;
  top: -18px;
  left: 40px;
}

.folder_icon {
  width: 30px;
  height: 30px;
  position: relative;
  top: 10px;
}
</style>