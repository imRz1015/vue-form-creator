<template>
  <a-page-header :backIcon="false" style="border-bottom: 1px solid rgb(235, 237, 240)" title="Basic Components" sub-title="拖动组件至内容区域进行快速创建" />
  <div class="components-list basic">
    <a-button v-for="(component, index) in basicComponents" :key="index" size="large" style="text-align: left">
      <template #icon>
        <EditOutlined />
      </template>
      {{ component.name }}
    </a-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue'
import { basicComponents } from './componentsConfig'

export default defineComponent({
  name: 'components-list',
  components: { EditOutlined },
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
