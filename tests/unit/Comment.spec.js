import { mount } from '@vue/test-utils'
import { mutations } from '@/store'
import moment from 'moment'
import Comment from '@/components/Social/Comment'


const factory = (props = {}) => {
  return mount(Comment, {
    propsData: props
  })
}


describe('Comment', () => {
    it('renders comment', () => {
        const comment = {
            id: parseInt(Math.random(1, 10)),
            content: "Lorem ipsum",
            user : mutations.getCurrentUser(),
            timestamp: moment().fromNow()            
        };      
        const wrapper = factory({ comment })
        expect(wrapper.find('.comment').exists()).toBe(true)

        expect(wrapper.find('.field.username').text()).toBe(comment.user.name)
    })

})