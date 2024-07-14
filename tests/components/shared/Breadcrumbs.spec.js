import { mount } from '@vue/test-utils'
import Breadcrumbs from '@/components/shared/Breadcrumbs.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('Breadcrumbs', () => {
  test('renders correctly', () => {
    const wrapper = mount(Breadcrumbs, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Profile', href: '/profile' }
        ]
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders breadcrumb links', () => {
    const wrapper = mount(Breadcrumbs, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Profile', href: '/profile' }
        ]
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.length).toBe(2)
    expect(links[0].text()).toBe('Home')
    expect(links[1].text()).toBe('Profile')
  })
})