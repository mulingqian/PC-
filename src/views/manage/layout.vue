<template>
  <div class="layout">
    <my-header></my-header>
    <div class="layout-wrap">
      <el-menu
        class="el-menu-vertical-demo"
        unique-opened
        :collapse="isCollapse">
        <div class="menu-header clearfix">
          <el-avatar :size="50" class="user-header" v-show="!isCollapse"></el-avatar>
          <i class="iconfont btn-control" @click.self="isCollapse = !isCollapse">&#xe63c;</i>
        </div>
        <el-submenu index="1-4" title="导航">
          <template slot="title">
            <i class="el-icon-location"></i>
              <span>导航一</span>
          </template>
          <el-menu-item class="" v-for="(item, index) in menuList" :key="index" @click="handleAdd(item)">
            <router-link tag="div" :to="item.path">
              <i class="el-icon-document"></i>
              {{item.title}}
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="container">
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          class="my-tabs"
          closable
          @tab-click="clickTab"
          @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item) in editableTabs"
            :key="item.name"
            :name='item.name'
            :label="item.title"
          ></el-tab-pane>
        </el-tabs>
        <div class="content-wrap">
          <transition name="slide-left">
            <router-view class="home-page"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
export default {
  components: {
    MyHeader
  },
  data () {
    return {
      isCollapse: false,
      editableTabsValue: 'index',
      editableTabs: [
        {
          title: '首页',
          name: 'manageindex',
          path: 'manageindex'
        }
      ],
      menuList: [
        {
          title: '首页',
          path: 'manageindex',
          name: 'manageindex'
        },
        {
          title: '我的消息',
          path: 'message',
          name: 'message'
        },
        {
          title: '权限管理',
          path: 'role',
          name: 'role'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    removeTab (targetName) {
      if (this.editableTabs.length === 1) return
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
              this.$router.push(nextTab.path)
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleAdd (item) {
      this.editableTabsValue = item.name
      for (let a = 0; a < this.editableTabs.length; a++) {
        if (item.name === this.editableTabs[a].name) {
          return
        }
      }
      console.log('1')
      this.editableTabs.push(item)
    },
    clickTab (tab) {
      // console.log(tab.name, this.$route.name)
      if (tab.name === this.$route.name) return false
      this.$router.push({name: tab.name})
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 100vh;
}
.layout-wrap {
  display: flex;
  flex-wrap: nowrap;
  // top: 80px;
  width: 100%;
  height: 100%;
  z-index: 40;
}
.my-tabs {
  // width: 80%;
}
.el-menu-vertical-demo {
  height: 100%;
  width:200px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}
.menu-header {
  height: 60px;
  line-height: 60px;
  margin-top: 80px;
  .user-header {
    margin: 5px 10px;
  }
  .btn-control {
    float: right;
    display: block;
    height: 40px;
    width: 50px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #f5f5f5;
    margin: 9px 10px;
    cursor: pointer;
  }
  .btn-control:hover {
    background: #bbb;
  }
}
.container {
  width: 100%;
  min-width: 350px;
  // display: inline-block;
  margin-top: 24px;
  margin-left: 24px;
  .content-wrap {
    background: #555;
  }
}
.home-page {
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter {
  opacity: 0;
  height: 0;
  display: none;
}
.slide-left-leave {
  opacity: 0;
  height: 0;
  display: none;
}
.slide-right-enter {
  opacity: 0;
  height: 0;
  display: none;
}
.slide-left-enter-active {
  opacity: 0;
  height: 0;
  -moz-transform: translate(30px, 0);
  -o-transform: translate(30px, 0);
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-right-enter-active {
  opacity: 0;
  height: 0;
  -moz-transform: translate(-30px, 0);
  -o-transform: translate(-30px, 0);
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
