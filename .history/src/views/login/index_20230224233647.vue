<template>
  <div class="login">
    <div class="login-box">
      <h2>起迪后台管理系统</h2>
      <el-form :rules="rules" :model="userinfo" ref="loginForm">
        <el-form-item label="用户名" prop="accountNumber">
          <el-input v-model="userinfo.accountNumber"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userinfo.password" :type="pwdType"></el-input>
          <see-password :inpType="pwdType" @getInpType="getInpType"></see-password>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" :loading="loginBtnLoading" @click="handlelogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user/index.js'
import SeePassword from '@/components/SeePassword'
export default {
  components: {
    SeePassword
  },
  data () {
    var accountNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      }
      callback()
    }
    var password = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
      callback()
    }
    return {
      pwdType: 'password', // 密码框类型
      userinfo: {
        accountNumber: 'test',
        password: '123456'
      },
      loginBtnLoading: false,
      rules: {
        accountNumber: [
          { validator: accountNumber, trigger: 'blur' }
        ],
        password: [
          { validator: password, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    // 获取pwd 类型
    getInpType (val) {
      console.log('获取pwd 类型', val)
      this.pwdType = val
    },
    handlelogin () {
      this.$refs['loginForm'].validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log('success')
          this.loginBtnLoading = true
          this.$store.commit('CHANGE_TOKEN', 'xxxxxx')
          this.$router.push('/management')
          login(this.userinfo.accountNumber, this.userinfo.password).then(res => {
            this.$store.commit('SAVE_USERINFO', 'xxxxxx')
            this.loginBtnLoading = false
          }).catch(res => {
            this.$message.error(res.data.msg)
            this.loginBtnLoading = false
          })
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  background: #2d3a4d;
  overflow: hidden;
  h2 {
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
  /deep/ .el-input {
    background: #2d3a4b;
    border: none;
  }
  /deep/ .el-form-item__label {
    color: #fff;
  }
}
.login-box {
  padding: 30px;
  box-sizing: border-box;
  width: 500px;
  height: 400px;
  border-radius: 6px;
  border: 1px solid #f1f1f1;
  margin: 200px auto;
  .btn {
    display: block;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
  }
}
</style>
