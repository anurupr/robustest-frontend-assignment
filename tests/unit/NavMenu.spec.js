import { mount } from '@vue/test-utils'
import NavMenu from '@/components/Common/NavMenu'

const factory = () => {
  return mount(NavMenu, {})
}


describe('NavMenu', () => {
    it('renders regular menu', () => {
      const wrapper = factory()
      expect(wrapper.find('ul.regular').exists()).toBe(true)
    })
  
    it('renders responsive menu', () => {
        const wrapper = factory()    
        expect(wrapper.find('ul.responsive').exists()).toBe(true)
    })
})