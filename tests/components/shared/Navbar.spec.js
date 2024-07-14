import { mount } from '@vue/test-utils'
import Navbar from '@/components/shared/Navbar.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe.only('Navbar', () => {
  test('renders correctly', () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('contains navigation links', () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.length).toBe(6)
    expect(links[0].text()).toBe('Home')
    expect(links[1].text()).toBe('Profile')
    expect(links[2].text()).toBe('Oracles')
    expect(links[3].text()).toBe('Settings')
    expect(links[4].text()).toBe('Login')
    expect(links[5].text()).toBe('Signup')
  })
})