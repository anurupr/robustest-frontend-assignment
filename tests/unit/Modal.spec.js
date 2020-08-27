import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Modal from '@/components/Common/Modal'

const factory = (props = {}) => {
  return mount(Modal, {
    propsData: props
  })
}


describe('Modal', () => {
    it('renders modal', () => {
      const wrapper = factory()
      expect(wrapper.find('.modal').exists()).toBe(true)
    })

    it('renders modal and show and then hide', async  () => {
        const wrapper = factory()
        wrapper.vm.showModal();
        await Vue.nextTick()
        expect(wrapper.element.style.display).toBe('block')

        wrapper.vm.hideModal();
        await Vue.nextTick()
        expect(wrapper.element.style.display).toBe('none')
      })
})