import { mount } from '@vue/test-utils'
import Button from '@/components/shared/Button.vue'

describe('Button', () => {
  test('renders correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('emits click event when clicked', () => {
    const wrapper = mount(Button)
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})