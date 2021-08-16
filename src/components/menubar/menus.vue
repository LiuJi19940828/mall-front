<template>
  <menuback style="width: 210px">
    <el-menu
        mode="vertical"
        :collapse=isCollapse
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :router=isRouter
    >
      <menu-item></menu-item>
    </el-menu>
  </menuback>
</template>

<script>
import menuItem from '@/components/menubar/menu-item'
import menuback from '@/components/menubar/menuback'

export default {
  name: "menus",
  components: {
    menuItem,
    menuback
  },
  data() {
    return {
      isCollapse: false,
      isRouter: true
    }
  }
}
</script>

<style scoped>


</style>