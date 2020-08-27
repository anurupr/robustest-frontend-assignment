import { mount } from '@vue/test-utils'
import { mutations } from '@/store'
import moment from 'moment'
import Post from '@/components/Social/Post'


const factory = (props = {}) => {
  return mount(Post, {
    propsData: props
  })
}


describe('Post', () => {
    it('renders post', () => {
        const post = {   
            "id": 1,
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "user": mutations.getCurrentUser(),
            "timestamp": moment().unix(),
            "comments": []
        
        };      
        const wrapper = factory({ post })
        expect(wrapper.find('.post').exists()).toBe(true)

        expect(wrapper.find('.field.username').text()).toBe(post.user.name)
    })

})