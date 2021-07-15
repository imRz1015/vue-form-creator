<template>
  <a-form-item class="components-item" :label="$attrs.name">
    <component :is="$attrs.type"></component>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'components-item',
  setup() {}
})
</script>

<style lang="less" scoped></style>
