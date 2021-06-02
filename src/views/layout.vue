<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <AppHeader />
    </a-layout-header>
    <a-layout class="content">
      <a-layout-sider class="left-side" width="320">
        <ComponentsList></ComponentsList>
      </a-layout-sider>
      <a-layout-content></a-layout-content>
      <a-layout-sider class="right-side" width="300"></a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script>
import AppHeader from '@/components/app-header/index.vue'
import ComponentsList from '@/components/components-list/index.vue'

export default {
  name: 'layout',
  components: { AppHeader, ComponentsList }
}
</script>

<style lang="less" scoped>
.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e4e7ed;
}

.content {
  background-color: #ffffff;

  .left-side {
    background-color: #ffffff;
    border-right: 1px solid #e4e7ed;
  }

  .right-side {
    background-color: #ffffff;
    border-left: 1px solid #e4e7ed;
  }
}

.footer {
  background-color: cornflowerblue;
}
</style>
