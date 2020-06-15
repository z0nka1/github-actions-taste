<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>
