<!--
 * @Author: 汤启民
 * @Date: 2021-12-21 15:10:29
 * @Description:
-->
<template>
  <a-tabs v-model:activeKey="activeTab">
    <a-tab-pane key="1" tab="字段属性">字段属性</a-tab-pane>
    <a-tab-pane key="2" tab="表单属性">
      <FormConfig @form-config-change="handleFormConfigChange"></FormConfig>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive, defineEmits } from 'vue'
import FormConfig from './components/form-config.vue'
const emit = defineEmits(['formConfigChange'])
const activeTab = ref('1')
const handleFormConfigChange = (e: any) => {
  emit('formConfigChange', e)
}
</script>

<style lang="scss" scoped></style>
