<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <AppHeader />
    </a-layout-header>
    <a-layout class="content">
      <a-layout-sider class="left-side" width="320">
        <ComponentsList />
      </a-layout-sider>
      <a-layout-content>
        <ComponentsPreview :preview-config="previewConfig" />
      </a-layout-content>
      <a-layout-sider class="right-side" width="300">
        <ComponentsConfig @form-config-change="handleFormConfigChange" />
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AppHeader from '@/components/app-header/index.vue'
import ComponentsList from '@/components/components-list/index.vue'
import ComponentsPreview from '@/components/components-preview/index.vue'
import ComponentsConfig from '@/components/components-config/index.vue'
const previewConfig = reactive({
  formConfig: {},
  formItemConfig: {}
})
const handleFormConfigChange = (e: any) => {
  previewConfig.formConfig = e
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
