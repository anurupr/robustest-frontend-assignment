<template>
    <div class="nf" id="newsfeed">
        <Post v-for="post in posts" :key="post.id" :post="post"></Post>        
    </div>
</template>
<script>
import Post from '@/components/Social/Post'
import { store } from '@/store';

export default {
    name: 'NewsFeed',
    components: {
        Post
    },
    data() {
        return {
            posts: store.state.posts
        }
      }
}
</script>