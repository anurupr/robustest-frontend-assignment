import { mount } from '@vue/test-utils'
import PostMenu from '@/components/Social/PostMenu'


const factory = (props = {}) => {
  return mount(PostMenu, {
    propsData: props
  })
}


describe('PostMenu', () => {
    it('renders post menu', () => {
        const wrapper = factory()
        expect(wrapper.find('ul.floating').exists()).toBe(true)
    })

})