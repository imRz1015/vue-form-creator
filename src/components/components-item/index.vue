<template>
  <a-form-item class="components-item" :label="config.name">
    <a-input v-if="config.type === 'input'" v-bind="config.options"></a-input>
    <a-textarea v-if="config.type === 'textarea'" v-bind="config.options"></a-textarea>
    <a-input-number v-if="config.type === 'number'" v-bind="config.options"></a-input-number>
    <a-radio-group v-if="config.type === 'radio'" :options="config.options.options"></a-radio-group>
    <a-checkbox-group v-if="config.type === 'checkbox'" :options="config.options.options"></a-checkbox-group>
    <a-time-picker v-if="config.type === 'timePicker'"></a-time-picker>
    <a-date-picker v-if="config.type === 'datePicker'"></a-date-picker>
    <a-rate v-if="config.type === 'rate'"></a-rate>
    <a-select v-if="config.type === 'select'"></a-select>
    <a-switch v-if="config.type === 'switch'"></a-switch>
    <a-slider v-if="config.type === 'slider'"></a-slider>
    <p v-if="config.type === 'text'">{{ config.options.defaultValue }}</p>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface IFormItem {
  name: string
  type: string
  options: {
    options?: object
    defaultValue?: string
  }
}

export default defineComponent({
  name: 'ComponentsItem',
  setup(_props, { attrs }) {
    const defaultAttrs = { name: '', type: '', options: {}, ...attrs }
    const config: IFormItem = defaultAttrs
    return {
      config
    }
  }
})
</script>

<style lang="less" scoped></style>
