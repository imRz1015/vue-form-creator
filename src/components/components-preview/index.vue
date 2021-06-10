<template>
  <div class="components-preview" ref="componentsPreview"></div>
</template>

<script lang="ts">
import Sortable from 'sortablejs'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    // 初始化表单预览区域
    const componentsPreview = ref(null)
    const initSortable = () => {
      const sortable = new Sortable(componentsPreview.value, {
        group: 'componentsList'
      })
      console.log(sortable)
    }
    onMounted(() => {
      initSortable()
    })

    return {
      componentsPreview
    }
  }
})
</script>
<style lang="less" scoped>
.components-preview {
  min-height: 100%;
}
</style>
