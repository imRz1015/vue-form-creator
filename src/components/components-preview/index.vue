<template>
  <a-form class="form-container" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }" :form="formState" v-bind="previewConfig.formConfig">
    <draggable
      v-model="componentsList"
      class="components-preview"
      item-key="token"
      v-bind="{ group: 'componentsGroup', ghostClass: 'ghost', animation: 200, handle: '.drag-widget' }"
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
import { defineComponent, reactive, toRefs } from 'vue'
import { nanoid } from 'nanoid'
import { getElementAttr } from '../../utils/tools'
import { basicComponents } from '../components-list/componentsConfig'
import { IComponents } from '../../types/components'
import ComponentsItem from '../components-item/index.vue'

const getComponentItemConfig = (belong: string, type: string): IComponents | null => {
  if (belong === 'basicComponents') {
    return basicComponents.find((itemConfig) => itemConfig.type === type) || null
  }
  return null
}

export default defineComponent({
  components: { draggable, ComponentsItem },
  props: {
    previewConfig: {
      type: Object,
      default: () => {
        return {
          formConfig: {},
          formItemConfig: {}
        }
      }
    }
  },
  setup(props) {
    // 初始化表单预览区域
    const formState = reactive({})
    const componentsList: IComponents[] = reactive([])
    const handleAddComponent = (evt: any) => {
      console.log(`@sortablejs:被放入预览区域的事件体`, evt)
      // 获取组件归属：基本组件 | 布局组件 | 高级组件
      const componentBelong = getElementAttr(evt.item, 'component-belong')
      // 获取组件类型
      const componentType = getElementAttr(evt.item, 'component-type')
      // 找到的组件默认配置
      const componentConfig = getComponentItemConfig(componentBelong, componentType)
      if (componentConfig) {
        console.log(`@该组件的默认配置:`, componentConfig)
        const key = nanoid()
        componentsList.push({ id: key, ...componentConfig })
      }
    }

    return {
      ...toRefs(props),
      formState,
      handleAddComponent,
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
