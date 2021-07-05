<template>
  <a-form class="form-container" :form="formState">
    <draggable
      class="components-preview"
      v-model="componentsList"
      item-key="token"
      v-bind="{ group: 'people', ghostClass: 'ghost', animation: 200, handle: '.drag-widget' }"
      @add="handleAddComponent"
    >
      <template #item="{ element }">
        <components-item v-bind="element"></components-item>
      </template>
    </draggable>
  </a-form>
</template>

<script lang="ts">
import draggable from 'vuedraggable/src/vuedraggable'
import { defineComponent, ref, reactive } from 'vue'
import { getElementAttr } from '../../utils/tools'
import { basicComponents } from '../components-list/componentsConfig'
import { IComponents } from '../../types/components'
import ComponentsItem from '../components-item/index.vue'

export default defineComponent({
  components: { draggable, ComponentsItem },
  setup() {
    // 初始化表单预览区域
    const formState = reactive({})
    const componentsPreview = ref(null)
    const componentsList: IComponents[] = reactive([])
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
      // 找到的组件默认配置
      const componentConfig = getComponentItemConfig(componentBelong, componentType)
      console.log(`@该组件的默认配置:`, componentConfig)
      console.log(componentsList)
      componentsList.push({ name: 'components' })
    }

    return {
      formState,
      handleAddComponent,
      componentsPreview,
      componentsList
    }
  }
})
</script>
<style lang="less" scoped>
.form-container {
  min-height: 100%;
  display: flex;

  .components-preview {
    min-height: 100%;
    flex: 1;
  }
}
</style>
