import { mount } from '@vue/test-utils'
import TextBox from '@/components/Common/TextBox'

const factory = (props = {}) => {
  return mount(TextBox, {
    propsData: props
  })
}


describe('TextBox', () => {
    it('renders default textbox with placeholder', () => {
      const pholdertext = "This is a placeholder";      
      const wrapper = factory({ pholder: pholdertext})
      expect(wrapper.find('.text__box').exists()).toBe(true)

      expect(wrapper.find('textarea').attributes('placeholder')).toBe(pholdertext)
    })

})