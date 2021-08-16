<template>
  <div class="err_container">
    <el-col span="10">
      <el-image :src="gif" fit="cover"></el-image>
    </el-col>
    <el-col span="10" offset=2>
      <div style="position: relative;bottom: 20px">
        <h1 style="color: #2f7dff">OOPS!</h1>
        <h2>很抱歉，页面不小心迷路了!</h2>
        <div style="color: #636161;font-size: 15px;margin-bottom: 14px">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <el-button type="primary" @onclick=goHome size="small">返回主页</el-button>
      </div>
    </el-col>
  </div>

</template>

<script>
import gif from '@/assets/gif_404.gif'

export default {
  name: "error",
  data() {
    return {
      gif
    }
  },
  methods: {
    goHome() {

    }
  }
}
</script>

<style scoped>
.err_container {
  width: 80%;
  margin: 150px auto;
}

</style>