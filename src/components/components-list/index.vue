<template>
  <a-page-header
    :backIcon="false"
    style="border-bottom: 1px solid rgb(235, 237, 240)"
    title="Basic Components"
    sub-title="拖动组件至内容区域进行快速创建"
  />
  <div class="components-list basic" ref="componentsListElement">
    <a-button
      v-for="(component, index) in basicComponents"
      :key="index"
      size="large"
      style="text-align: left"
      component-belong="basicComponents"
      :component-type="component.type"
    >
      <template #icon>
        <IconFont :type="component.icon" />
      </template>
      {{ component.name }}
    </a-button>
  </div>
</template>
<script lang="ts">
import Sortable from 'sortablejs'
import { ref, defineComponent, onMounted } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import { basicComponents } from './componentsConfig'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2600762_6t1ywbddyed.js'
})
export default defineComponent({
  name: 'components-list',
  components: { IconFont },
  setup() {
    // 初始化sortable
    let sortable = null
    const componentsListElement = ref(null)
    const initSortable = () => {
      sortable = new Sortable(componentsListElement.value, {
        group: {
          name: 'componentsList',
          put: false,
          pull: 'clone'
        },
        animation: 150,
        sort: false
      })
      console.log(componentsListElement.value)
      console.log(sortable)
    }

    onMounted(() => {
      initSortable()
    })
    return {
      basicComponents,
      componentsListElement
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
