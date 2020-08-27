import { mount } from '@vue/test-utils'
import CommentMenu from '@/components/Social/CommentMenu'


const factory = (props = {}) => {
  return mount(CommentMenu, {
    propsData: props
  })
}


describe('CommentMenu', () => {
    it('renders comment menu', () => {
        const wrapper = factory()
        expect(wrapper.find('ul.floating').exists()).toBe(true)
    })

})