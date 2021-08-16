<template>
  <div>
    <el-container>
      <el-header></el-header>
      <el-main>
        <el-card class="box-card card">
          <div class="el-card__header">
            <el-image :src=url fit="contain"/>
            <div class="login-card-title">mall-front</div>
          </div>
          <div class="el-card__body">
            <el-form v-model="loginForm">
              <el-form-item>
                <el-input
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-user"
                    v-model=loginForm.username
                    size="small"
                />
              </el-form-item>
              <el-form-item>
                <el-input
                    placeholder="请输入密码"
                    prefix-icon="el-icon-lock"
                    v-model=loginForm.password
                    size="small"
                    show-password
                />
              </el-form-item>
              <el-form-item>
                <el-input
                    placeholder="再次输入密码"
                    prefix-icon="el-icon-s-check"
                    size="small"
                    v-model="loginForm.checkPassword"
                    show-password
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" size="small" onclick="">登录</el-button>
            <el-button type="primary" size="small" onclick="">注册</el-button>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mall from "@/assets/mall.jpg"

export default {
  name: "index",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        checkPassword: ""
      },
      url: mall
    }
  }
}
</script>

<style>
.card {
  width: 600px;
  height: auto;
  margin: 50px auto;

}

.login-card-title {
  font-size: 3em;
  color: deepskyblue;
  display: inline-block;
  position: relative;
  bottom: 50px;
}

</style>