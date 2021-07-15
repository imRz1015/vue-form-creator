<template>
  <a-form-item class="components-item" :label="config.name">
    <component :is="config.type"></component>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'components-item',
  setup(_props, { attrs }) {
    const config = attrs
    return {
      config
    }
  }
})
</script>

<style lang="less" scoped></style>
