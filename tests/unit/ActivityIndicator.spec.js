import { shallowMount } from '@vue/test-utils'
import ActivityIndicator from '@/components/Common/ActivityIndicator'

const factory = () => {
  return shallowMount(ActivityIndicator, {})
}


describe('Header', () => {
    it('renders loader', () => {
      const wrapper = factory()
      expect(wrapper.find('.loader').exists()).toBe(true)
    })
})