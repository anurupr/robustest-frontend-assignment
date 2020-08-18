import Vue from "vue";
import * as utils from "@/utils";
import Posts from "@/api/Posts";

export const store = Vue.observable({
    state: {
        loggedIn: false,
        posts: [],
        users: []
    }
});

export const mutations = {     
    getLatestPostId() {
        return (Math.max.apply(Math, store.state.posts.map(function(o) { return o.id; }))) + 1;        
    },
    getLatestCommentIdForPost(postId) {
        if (store.state.posts[postId - 1].comments.length > 0) {
            return (Math.max.apply(Math, store.state.posts[postId - 1].comments.map(function(o) { return o.id; }))) + 1;  
        } else {
            return 1;
        }
    },
    getCurrentUser() {
        return {
            id: 1,
            username: 'anurupr',
            name: 'Anurup Raveendran',
            email: 'anurupraveendran@gmail.com',
            gravatar: utils.cgravatar('anurupraveendran@gmail.com')
        };
    },
    getPostIndex(postId) {
        return store.state.posts.findIndex(p => p.id == postId);
    },
    getPost(postId) {
        return store.state.posts.find(p => p.id == postId);
    },
    getCommentIndex(postId, commentId) {
        const post = this.getPost(postId);
        if (post)
            return post.comments.findIndex(c => c.id == commentId);
        else 
            return -1;
    },
    getComment(postId, commentId) {
        const post = this.getPost(postId);
        if (post)
            return post.comments.find(c => c.id == commentId);
    },  
    addPost(post) {
        console.log('post', post);
        store.state.posts.unshift(post);
        return Posts.createPost(post);
    },
    updatePost(postId, content) {
        if ((typeof content !== 'undefined' || content != null || content != "")) {
            const postIndex = this.getPostIndex(postId);
            if (postIndex != -1) {
                store.state.posts[postIndex].content = content;                
                return Posts.updatePost(store.state.posts[postIndex]);
            } else {
                return null;
            }
        } else {
            return null;
        }
    },
    deletePost(postId) {
        console.log('postId delete', postId);
        const postIndex = this.getPostIndex(postId);
        if (postIndex != -1) {
            store.state.posts.splice(postIndex, 1); 
            return Posts.deletePost(postId);
        } else {
            return null;
        }
    },
    addComment(postId, comment) {
        const postIndex = this.getPostIndex(postId);
        if (postIndex != -1) {
            store.state.posts[postIndex].comments.unshift(comment);
            return Posts.createComment(store.state.posts[postIndex]);
        } else {
            return null;
        }
        
    },
    updateComment(postId, commentId, content) {
        const postIndex = this.getPostIndex(postId);
        const commentIndex =  this.getCommentIndex(postId, commentId);
        if ((typeof content !== 'undefined' || content != null || content != "")             
            && postIndex != -1
            && commentIndex != -1) {
                store.state.posts[postIndex].comments[commentIndex].content = content;
                return Posts.updateComment(store.state.posts[postIndex])
        } else {
            return null;
        }
    },
    deleteComment(postId, commentId) {
        console.log('store', 'deleting comment id', commentId, ' of post id', postId);        
        const postIndex = this.getPostIndex(postId);
        const commentIndex =  this.getCommentIndex(postId, commentId);
        if (postIndex != -1 && commentIndex != -1) {            
            store.state.posts[postIndex].comments.splice(commentIndex, 1);
            return Posts.deleteComment(store.state.posts[postIndex]);
        } else {
            return null;
        }
    },
    getAllPosts() {
        return Posts.getPosts()
        .then((json) => {
            console.log('json', json);
            store.state.posts = json;
            store.state.posts.sort((a, b) => b.timestamp - a.timestamp);            
        })
    },
    getAllUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            store.state.users = json;
            // console.log(store.state.users);
        })
    }
};
