import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Common/Header'

const factory = () => {
  return shallowMount(Header, {})
}


describe('Header', () => {
    it('renders logo', () => {
      const wrapper = factory()
      expect(wrapper.find('.logo').exists()).toBe(true)
    })
})