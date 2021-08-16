<template>
  <el-dropdown
      trigger="click"
      @command="handleCommand"
      class="user_avatar_container"
  >
    <div class="user_avatar_wrapper">
      <img :src=url fit="contain" class="user-avatar">
      <i class="el-icon-arrow-down  el-icon--right"></i>
    </div>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="home">首页</el-dropdown-item>
      <el-dropdown-item command="exit">退出</el-dropdown-item>
    </el-dropdown-menu>

  </el-dropdown>
</template>

<script>
import url from '@/assets/user.jpg'

export default {
  name: "userinfo",
  data() {
    return {
      url
    }
  },
  methods: {
    handleCommand: function (command) {
        command.toString()
    }
  }
}
</script>

<style scoped>
.user_avatar_container {
  height: 50px;
  display: inline-block;
  position: relative;
  left: 900px;
  top: -56px;

}

.user_avatar_wrapper {
  cursor: pointer;
  margin-top: 5px;
  position: relative;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

</style>