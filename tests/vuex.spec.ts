import { mount } from '@vue/test-utils'
import Test from '../src/views/vuex.vue'

console.log('before test')
test('vuex.vue', async () => {
  console.log('start')
  const wrapper = mount(Test)
  await wrapper.vm.$nextTick()
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is : 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is : 1')
})
