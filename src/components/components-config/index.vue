<template>
  <a-tabs v-model:activeKey="activeTab">
    <a-tab-pane key="1" tab="字段属性">字段属性</a-tab-pane>
    <a-tab-pane key="2" tab="表单属性">
      <FormConfig @form-config-change="handleFormConfigChange"></FormConfig>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive, defineEmit } from 'vue'
import FormConfig from './components/form-config.vue'
const emit = defineEmit(['formConfigChange'])
const activeTab = ref('1')
const handleFormConfigChange = (e) => {
  emit('formConfigChange', e)
}
</script>

<style lang="scss" scoped></style>
