<template>
  <el-menu mode="horizontal" v-bind:router="true">
    <el-menu-item index="/bored">Feel bored</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Animals</template>
      <el-menu-item index="/form">表单</el-menu-item>
      <el-menu-item index="/dog">Dog</el-menu-item>
      <el-menu-item index="/cat">Cat</el-menu-item>
    </el-submenu>
    <el-menu-item index="/advice">Get advices</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header'
}
</script>