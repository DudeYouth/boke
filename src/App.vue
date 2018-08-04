<template>
  <div>
    <div class="nav-box">
      <el-col :span="12"  :offset="4">
        <el-menu :default-active="activeIndex" style="border-bottom:0;" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <ul class="icon-list">
          <li class="icon-item"><i class="el-icon-message"></i></li>
          <li class="icon-item"><router-link to="/Me"><i class="el-icon-menu"></i></router-link></li>
        </ul>
      </el-col>
    </div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <div id="app">
          
          

          <div class="line"></div>
          <router-view/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  body,
  html {
    margin: 0px;
    padding: 0px;
  }
  body{
    background-color:"#f6f6f6"
  }
  .header-nav-container {
    text-align: center;
  }
  .icon-list{
    display:inline-block;
    float:right;
  }
  .icon-list .icon-item{
    display:inline-block;
    padding:0px 8px;
    font-size:20px;
  }
  .nav-box{
    
    box-shadow: 0px 1px 0px #e6e6e6;
    overflow:hidden;
  }
</style>
