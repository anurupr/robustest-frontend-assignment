import Vue from "vue";
import * as utils from "@/utils";
import api from "@/api/";
export const store = Vue.observable({
    state: {
        loggedIn: false,
        posts: [],
        users: []
    }
});

export const mutations = {    
    addPost(post) {
        console.log('post', post);
        store.state.posts.unshift(post);
    },
    addComment(postId, comment) {
        const postIndex = this.getPostIndex(postId);
        if (postIndex != -1) {
            store.state.posts[postIndex].comments.unshift(comment);
        }
        
    },
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
    updatePost(postId, content) {
        if ((typeof content !== 'undefined' || content != null || content != "") && store.state.posts[postId - 1]) {
            store.state.posts[postId - 1].content = content;
        }
    },
    deletePost(postId) {
        console.log('postId delete', postId);
        const postIndex = this.getPostIndex(postId);
        if (postIndex != -1) {
            store.state.posts.splice(postIndex, 1);            
        }
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
    deleteComment(postId, commentId) {
        console.log('store', 'deleting comment id', commentId, ' of post id', postId);        
        const postIndex = this.getPostIndex(postId);
        const commentIndex =  this.getCommentIndex(postId, commentId);
        if (postIndex != -1 && commentIndex != -1) {
            store.state.posts[postIndex].comments.splice(commentIndex, 1);
            
        }
    },
    updateComment(postId, commentId, content) {
        const postIndex = this.getPostIndex(postId);
        const commentIndex =  this.getCommentIndex(postId, commentId);
        if ((typeof content !== 'undefined' || content != null || content != "")             
            && postIndex != -1
            && commentIndex != -1) {
            store.state.posts[postIndex].comments[commentIndex].content = content;
        }
    },
    getAllPosts() {
        api('/posts')        
        .then(response => response.json())
        .then(json => {
            store.state.posts = json;
            store.state.posts.sort((a, b) => b.timestamp - a.timestamp);           
            console.log(store.state.posts);
        })
    },
    getAllUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            store.state.users = json;
            console.log(store.state.users);
        })
    }
};
