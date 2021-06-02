<template>
  <Layout></Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './views/layout.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

<style lang="less">
@import './styles/index';

#app {
  height: 100%;
}
</style>
