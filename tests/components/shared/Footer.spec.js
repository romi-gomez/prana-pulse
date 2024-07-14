import { mount } from '@vue/test-utils'
import Footer from '@/components/shared/Footer.vue'

describe('Footer', () => {
  test('renders correctly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.element).toMatchSnapshot()
  })

  test('contains copyright text', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('© 2023 Your Company. All rights reserved.')
  })
})