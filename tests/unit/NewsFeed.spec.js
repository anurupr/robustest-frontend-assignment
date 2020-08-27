import { mount } from '@vue/test-utils'
import NewsFeed from '@/components/Social/NewsFeed'


const factory = (props = {}) => {
  return mount(NewsFeed, {
    propsData: props
  })
}


describe('NewsFeed', () => {
    it('renders comment menu', () => {
        const wrapper = factory()
        expect(wrapper.find('#newsfeed').exists()).toBe(true)
        
    })

})