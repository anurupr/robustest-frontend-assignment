<template>
    <div class="nf" id="newsfeed">
        <Post v-for="post in posts" :key="post.id" :post="post"></Post>        
    </div>
</template>
<script>
import Post from '@/components/Social/Post'
import { store, mutations } from '@/store';

export default {
    name: 'NewsFeed',
    components: {
        Post
    },
    computed: {
        posts() {
            return store.state.posts            
        }
    },
    mounted() {
        if (store.state.users.length == 0)
            mutations.getAllUsers();
        if (store.state.posts.length == 0)            
            mutations.getAllPosts();
    }
    
}
</script>