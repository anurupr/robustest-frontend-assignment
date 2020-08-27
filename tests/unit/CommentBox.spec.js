import { mount } from '@vue/test-utils'
import CommentBox from '@/components/Social/CommentBox'


const factory = (props = {}) => {
  return mount(CommentBox, {
    propsData: props
  })
}


describe('CommentBox', () => {
    it('renders commentbox', () => {   
        const wrapper = factory();    
        expect(wrapper.find('.text__box').exists()).toBe(true)
    })

})