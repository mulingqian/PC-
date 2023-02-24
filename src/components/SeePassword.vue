<template>
  <div class="loginPasswordIcon">
    <span class="stuIconfontStatiQuery" v-if='!isShowPassword' @click="changePwdType">&#xe60c;</span>
    <span class="stuIconfontStatiQuery" v-if='isShowPassword' @click="changePwdType">&#xe66a;</span>
  </div>
</template>
<script>
export default{
  name: 'seePasswordIcon',
  props: {
    inpType: String
  },
  data () {
    return {
      type: '',
      isShowPassword: false
    }
  },
  created () {
    this.type = this.inpType
  },
  methods: {
    // 修改密码type类型
    changePwdType () {
      // console.log(this.pwd, '用户密码', this.$refs.pwd.type)
      this.isShowPassword = !this.isShowPassword
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
      this.$emit('getInpType', this.type)
    }
  }
}
</script>

<style lang="scss" scoped>
  .loginPasswordIcon{
    position:absolute;
    left:90%;
    top:42px;
    >span{
      color:#999;
      font-size:22px;
    }
  }
  /*统计查询  icon=学生服务中心*/
  @font-face {
    font-family: 'stuIconfontStatiQuery';  /* project id 1620030 */
    src: url('//at.alicdn.com/t/font_1620030_58llwmfuds8.eot');
    src: url('//at.alicdn.com/t/font_1620030_58llwmfuds8.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1620030_58llwmfuds8.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1620030_58llwmfuds8.woff') format('woff'),
    url('//at.alicdn.com/t/font_1620030_58llwmfuds8.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1620030_58llwmfuds8.svg#stuIconfontStatiQuery') format('svg');
  }
  .stuIconfontStatiQuery{
    font-family: 'stuIconfontStatiQuery';
    font-size: 30px;
    color: #fff;
  }
</style>
