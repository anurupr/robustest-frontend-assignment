import Vue from "vue";
var crypto = require('crypto');
var moment = require('moment');
var md5 = str => {
    return crypto.createHash('md5').update(str).digest("hex");
}

var gethtime = timestamp => {
   return moment.unix(timestamp).fromNow();
}

export const store = Vue.observable({
    state: {
        loggedIn: false,
        posts: [
            {   
                id: 1,
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                user: {
                    id: 10,
                    username: 'anurupr',
                    email: 'anurupraveendran@gmail.com',
                    gravatar: 'https://www.gravatar.com/avatar/' + md5('anurupraveendran@gmail.com')+ '?d=robohash&r=PG'
                },
                timestamp: gethtime(1596993895),
                comments: []
            
            },
            {   
                id: 2,
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                user: {
                    id: 11,
                    username: 'swarupr',
                    email: 'swarupraveendran@gmail.com',
                    gravatar: 'https://www.gravatar.com/avatar/' + md5('swarupraveendran@gmail.com') +'?d=robohash&r=PG'

                },
                timestamp: gethtime(1596993895),
                comments: []
            },
        
        ],
    }
});

export const mutations = {    
    addPost(post) {
        store.state.posts.unshift(post);
    },
    addComment(postId, comment) {
        store.state.posts[postId - 1].comments.unshift(comment);
    },
    getLatestPostId() {
        return (Math.max.apply(Math, store.state.posts.map(function(o) { return o.id; }))) + 1;        
    },
    getLatestCommentIdForPost(postId) {
        return (Math.max.apply(Math, store.state.posts[postId - 1].comments.map(function(o) { return o.id; }))) + 1;  
    },
    getCurrentUser() {
        return {
            id: 10,
            username: 'anurupr',
            email: 'anurupraveendran@gmail.com',
            gravatar: 'https://www.gravatar.com/avatar/' + md5('anurupraveendran@gmail.com')+ '?d=robohash&r=PG'
        };
    }
};
