<template>
  <a-page-header
    :backIcon="false"
    style="border-bottom: 1px solid rgb(235, 237, 240)"
    title="Basic Components"
    sub-title="拖动组件至内容区域进行快速创建"
  />
  <draggable
    class="components-list basic"
    v-model="basicComponents"
    item-key="type"
    v-bind="{ group: { name: 'people', pull: 'clone', put: false }, sort: false, ghostClass: 'ghost' }"
  >
    <template #item="{ element }">
      <a-button size="large" style="text-align: left" component-belong="basicComponents" :component-type="element.type">
        <template #icon>
          <IconFont :type="element.icon" />
        </template>
        {{ element.name }}
      </a-button>
    </template>
  </draggable>
</template>
<script lang="ts">
import draggable from 'vuedraggable/src/vuedraggable'
import { defineComponent } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import { basicComponents } from './componentsConfig'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2600762_6t1ywbddyed.js'
})
export default defineComponent({
  name: 'components-list',
  components: { IconFont, draggable },
  setup() {
    return {
      basicComponents
    }
  }
})
</script>

<style lang="less" scoped>
.components-list {
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(2, 136px);
  grid-gap: 16px 16px;
}
</style>
