import { shallowMount } from '@vue/test-utils'
import Menu from '@/components/Common/Menu'

const factory = (props = {}) => {
    return shallowMount(Menu, {
      propsData: props
    })
  }
  


describe('Menu', () => {
    it('renders vertical menu by default', () => {
      const wrapper = factory()
      expect(wrapper.find('ul.vertical').exists()).toBe(true)
    })
  
    it('renders horizontal menu', () => {
        const wrapper = factory({ layout: "horizontal" })   
        expect(wrapper.find('ul.horizontal').exists()).toBe(true)
    })
})