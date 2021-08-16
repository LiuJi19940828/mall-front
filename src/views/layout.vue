<template>
  <div class="app_wrapper">
    <Menubar class="menu_container"/>
    <div class="main_container">
      <Header></Header>
      <Main style="margin-top: 20px"></Main>
    </div>

  </div>
</template>

<script>
import Menubar from "@/components/menubar/menubar";
import Header from "@/components/header/header";
import Main from '@/views/main'

export default {
  name: "layout",
  components: {Header, Menubar, Main}
}
</script>

<style scoped>
.app_wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.menu_container {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: scroll;
}

.main_container {
  min-height: 100%;
  margin-left:205px;
  overflow: hidden;

}

</style>