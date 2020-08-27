import { mount } from '@vue/test-utils'
import PostBox from '@/components/Social/PostBox'


const factory = (props = {}) => {
  return mount(PostBox, {
    propsData: props
  })
}


describe('PostBox', () => {
    it('renders PostBox', () => {   
        const wrapper = factory();    
        expect(wrapper.find('.text__box').exists()).toBe(true)
    })

})