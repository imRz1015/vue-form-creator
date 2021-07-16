<template>
  <a-form-item class="components-item" :label="config.name">
    <a-input v-if="config.type === 'input'" v-bind="config.options"></a-input>
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
