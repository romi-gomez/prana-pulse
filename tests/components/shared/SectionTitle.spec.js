import { mount } from '@vue/test-utils'
import SectionTitle from '@/components/shared/SectionTitle.vue'

describe('SectionTitle', () => {
  test('renders correctly', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'Test Title'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('displays the correct title', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: 'Test Title'
      }
    })
    expect(wrapper.text()).toBe('Test Title')
  })
})