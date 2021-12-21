<!--
 * @Author: 汤启民
 * @Date: 2021-12-21 15:12:23
 * @Description:
-->
<template>
  <a-form :model="formState" layout="vertical" style="padding: 0 12px">
    <a-form-item label="表单对齐方式">
      <a-radio-group v-model:value="formState.layout" @change="handleChange">
        <a-radio-button value="horizontal">横向对齐</a-radio-button>
        <a-radio-button value="vertical">纵向对齐</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="标签对齐方式">
      <a-radio-group v-model:value="formState.labelAlign" @change="handleChange">
        <a-radio-button value="left">左对齐</a-radio-button>
        <a-radio-button value="right">右对齐</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="组件尺寸">
      <a-radio-group v-model:value="formState.size" @change="handleChange">
        <a-radio-button value="small">small</a-radio-button>
        <a-radio-button value="middle">middle</a-radio-button>
        <a-radio-button value="large">large</a-radio-button>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { reactive, defineEmits } from 'vue'

interface IFormState {
  layout: 'horizontal' | 'vertical'
  labelAlign: 'left' | 'right'
  size: 'large' | 'middle' | 'small'
}

const emit = defineEmits(['formConfigChange'])

const formState: IFormState = reactive({
  layout: 'horizontal',
  labelAlign: 'left',
  size: 'small'
})
const handleChange = () => {
  emit('formConfigChange', formState)
}
</script>
