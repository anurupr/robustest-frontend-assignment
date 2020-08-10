export default {
    state: {
        loggedIn: false,
        posts: [],
    },
    addPost: (post) => {
        this.state.posts.push(post);
    },
    addComment: (postId, comment) => {
        this.state.posts[postId].comments.unshift(comment);
    }
}