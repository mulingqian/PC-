# qd-pc-management

> 一个基于VUE的后台管理系统模板

## 项目目录
```
|-- build   vue-cli2.x默认打包配置
|-- config   
    |-- dev.env.js      // 开发环境
    |-- index.js        // 全局打包配置和proxy配置等
    |-- prod.env.js     // 生产环境
|-- src                 // 项目目录
    |-- api             // 对接口地址的统一管理目录
        |-- xx.js       // 分模块管理api地址
    |-- assets          // 项目内部资源文件
        |-- js          // js资源文件
        |-- images      // 图片资源
        |-- iconfont    // 字体及图标资源
        |-- css         // 全局样式资源
    |-- components      // 公共组件
    |-- router          // 全局路由配置
    |-- store           // vuex相关配置
    |-- utils           // api封装及js工具类
    |-- views           // 页面文件目录
    |-- App.vue         // 根路由页面
    |-- main.js         // 全局入口文件
|-- static              // 外部静态资源文件目录
    |--config.js        // 项目外部配置文件
|-- .eslintrc           // eslint配置
|-- index.html          // SPA单页面html文件
|-- package.json        // 项目依赖的配置文件
```
## 运行及打包

``` bash
# 安装依赖
npm install

# 开发环境服务器端口 localhost:8080
npm run dev

# 项目生产环境打包
npm run build

```