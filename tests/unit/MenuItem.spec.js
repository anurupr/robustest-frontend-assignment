import { shallowMount } from '@vue/test-utils'
import MenuItem from '@/components/Common/MenuItem'

const factory = (props = {}) => {
  return shallowMount(MenuItem, {
    propsData: props
  })
}


describe('MenuItem', () => {
    it('renders regular menu item', () => {
      const wrapper = factory({
          item: {
            url: "#",
            name: "Login",
            target: "",
            cl: "user-login",
            icon: "sign-in-alt",
            event: "login",
            cond: "loggedIn",
            condValue: false
          }
      })
      
      expect(wrapper.find('li.menuitem').exists()).toBe(true)

      expect(wrapper.find('li.menuitem > a').attributes('title')).toBe('Login')
    })
})