<template>
  <div class="components-preview" ref="componentsPreview">
    <div v-for="(item, index) in componentsList" :key="index"></div>
  </div>
</template>

<script lang="ts">
import Sortable from 'sortablejs'
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { getElementAttr } from '../../utils/tools'
import { basicComponents } from '../components-list/componentsConfig'
import { IComponents } from '../../types/components'

export default defineComponent({
  setup() {
    // 初始化表单预览区域
    const componentsPreview = ref(null)
    const componentsList = reactive([])
    const getComponentItemConfig = (belong: string, type: string): IComponents | null | undefined => {
      if (belong === 'basicComponents') {
        return basicComponents.find((itemConfig) => itemConfig.type === type)
      }
      return null
    }
    const handleAddComponent = (evt: any) => {
      console.log(`@sortablejs:被放入预览区域的事件体`, evt)
      // 获取组件归属：基本组件 | 布局组件 | 高级组件
      const componentBelong = getElementAttr(evt.item, 'component-belong')
      // 获取组件类型
      const componentType = getElementAttr(evt.item, 'component-type')
      console.log(`@组件类型：${componentBelong},@组件名称：${componentType}`)
      // 找到的组件默认配置
      const componentConfig = getComponentItemConfig(componentBelong, componentType)
      console.log(`@该组件的默认配置:`, componentConfig)
    }
    const initSortable = () => {
      const sortable = new Sortable(componentsPreview.value, {
        group: {
          name: 'componentsList'
        },
        onAdd: handleAddComponent
      })
      console.log(sortable)
    }
    onMounted(() => {
      initSortable()
    })

    return {
      componentsPreview,
      componentsList
    }
  }
})
</script>
<style lang="less" scoped>
.components-preview {
  min-height: 100%;
}
</style>
