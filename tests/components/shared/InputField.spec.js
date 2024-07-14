import { mount } from '@vue/test-utils'
import InputField from '@/components/shared/InputField.vue'

describe('InputField', () => {
  test('renders correctly', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Username',
        name: 'username'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('emits update:modelValue event when input value changes', async () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Username',
        name: 'username',
        modelValue: ''
      }
    })
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['new value'])
  })
})