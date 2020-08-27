import { shallowMount } from '@vue/test-utils'
import HiddenDiv from '@/components/Common/HiddenDiv'

const factory = (props = {}) => {
  return shallowMount(HiddenDiv, {
    propsData: props
  })
}


describe('HiddenDiv', () => {
    it('renders hidden div', () => {
      const wrapper = factory()
      expect(wrapper.find('.no-visible').exists()).toBe(true)
    })
})