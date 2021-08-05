<template>
  <div>baseConfig is {{ baseConfig }}</div>
  <div>props is {{ props.formType }}</div>
  <div>baseObj is {{ baseObj.name + '+' + baseObj.textAlign }}</div>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive } from 'vue'

const props = defineProps({
  formType: {
    type: Number,
    default: 999
  }
})
const baseConfig = ref(0)
const baseObj = reactive({
  name: 'input',
  textAlign: 'left'
})
</script>

<style lang="scss" scoped></style>
