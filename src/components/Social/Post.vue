<template>
    <div class="box nf-item">
        <Row>
            <Column class="column__ct_1  column__xs__ct_2 avatar">
                <img :src="post.user.gravatar">
            </Column>
            <Column class="column__ct_10  column__xs__ct_9">
                <span class="field username">{{ post.user.name }}</span>
                <span class="field time">{{ gethtime(post.timestamp) }}</span>
                <template v-if="post.user.id == currentUserId">
                    <PostMenu v-on:emit-event="handleEmitEvent" />
                </template>
            </Column>
        </Row>
        <Row>
            <Column class="column__ct_12">
                <template v-if="editable">
                    <p v-text="content" contenteditable="true" @blur="handleInput"></p>
                    <button class="submit" v-on:click="save">Save</button>
                </template>
                <template v-else>
                    <p>{{ content }}</p>
                </template>                
            </Column>
        </Row>
        <template v-if="loggedIn">
            <Row>
                <Column class="column__ct_12 commentbox__container">
                    <CommentBox :postId="post.id" />
                </Column>
            </Row>            
        </template>
        
        <template v-if="post.comments.length > 0">
            <hr class="separator" />            
            <Row>
                <Column class="column__ct_12 comment__container">
                    <Comment v-for="comment in post.comments" :key="comment.id" :comment="comment" :post="post"></Comment>
                </Column>
            </Row>
        </template>
        
    </div>
</template>
<script>
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'
import Comment from '@/components/Social/Comment'
import CommentBox from '@/components/Social/CommentBox'
import PostMenu from '@/components/Social/PostMenu'
import { store, mutations } from '@/store';
import { gethtime } from '@/utils';
export default {
    name: 'Post',
    props: ['post'],
    components: {        
        Column,
        Row,
        Comment,
        CommentBox,
        PostMenu
    },
    methods: {
        handleEmitEvent: function(ev) {
            console.debug('handlingEmitEvent in Post component: ');
            this.$emit("emit-event", ev);
            switch(ev) {
                case 'edit':
                    this.edit();
                    break;
                case 'delete':
                    this.delete();
                    break;
                default:
                    break;
            }
        },
        edit: function() {
            console.debug('editing post: ', this.post.id);
            this.editable = true;
        },
        delete: function() {
            console.debug('deleting post: ', this.post.id);
            mutations.deletePost(this.post.id);
            // confirm and then remove from dom
        },
        save: function() {
            this.editable = false;
            // get content from element and save it in
            mutations.updatePost(this.post.id, this.content);
        },
        cancel: function() {
            //revert changes
            this.content = this.post.content;
            this.editable = false;
        },
        handleInput: function(e){
            this.content = e.target.innerText
        }
        
    },
    data() {
        return {
            content: null,
            editable: false,
            gethtime(tstamp){
                return gethtime(tstamp);
            }
        }
    },
    computed: {
      loggedIn() {
        return store.state.loggedIn;
      },
      currentUserId() {
        return mutations.getCurrentUser().id
      }
    },    
    mounted(){      
        this.content = this.post.content;
    }
}
</script>
<style scoped> 
    .nf-item {
        position: relative;
    }

    .nf-item:not(:first-child):not(:last-child) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .nf-item:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .nf-item:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .nf-item + .nf-item {
        margin-top: 0.25rem;
    }

   .nf-item p,
   .nf-item /deep/ p {        
        white-space: pre-wrap; /* in case user edits post / comment, this ensures that any line breaks are visible */
        font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif;
        font-size: 1.5rem;
       
        /* this makes sure text is justified with proper spacing */
        text-align: justify;
        text-justify: distribute;
        text-align-last: left;        
    }

    .nf-item img {
        border-radius: 150px;
        border: 1px solid #aaa;
        /* box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2); */
        width: 100%;
    }

    .nf-item .avatar {
        max-width: 60px;
        padding-right: 0;
    }

    .nf-item .column {
        flex-basis: auto;
    }
    .nf-item .column .field,
    .nf-item .column /deep/ .field {
        display: block;
        width: 100%;
        float: left;
        text-align: left;
    }    

    .nf-item .row {
        display: flex;
    }

    .nf-item .time,
    .nf-item /deep/ .time {
        font-size: 1.2rem;
    }

    .nf-item .username,
    .nf-item /deep/ .username {
        color: steelblue;
    }

    .controls {
        top: 0;
        right: 0;
    }

    p[contenteditable="true"] {
        border: 1px solid #aaa;
        padding: 0.5em;
        white-space: pre-wrap;
    }

    .commentbox__container,
    .comment__container {
        padding: 0;
    }

    
</style>