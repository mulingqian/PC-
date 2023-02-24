<template>
  <div class="header">
    <div class="login-layla">
      <el-dropdown  @command="handleCommand" class="user-drop">
        <span class="el-dropdown-link">
          <el-avatar :size="50" class="user-header"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item  command="1">修改个人信息</el-dropdown-item>
          <el-dropdown-item divided command="2">修改密码</el-dropdown-item>
          <el-dropdown-item divided command="3">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand (command) {
      let click = command
      if (click === '1') {
      } else if (click === '2') {
      } else if (click === '3') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 80px;
    width: 100%;
    background: #409eff;
    z-index: 50;
  }
  .login-layla {
    position: absolute;
    top: 15px;
    right: 100px;
    z-index: 1000;
  }
  .user-header {
    cursor: pointer;
  }
</style>
