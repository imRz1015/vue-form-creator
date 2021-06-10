<template>
  <div class="components-preview" ref="componentsPreview"></div>
</template>

<script lang="ts">
import Sortable from 'sortablejs'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
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
