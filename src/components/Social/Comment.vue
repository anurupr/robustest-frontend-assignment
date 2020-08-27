<template>
    <div class="box nf-item comment">
        <Row>
            <Column class="column__ct_1 column__xs__ct_2 avatar">
                <img :src="comment.user.gravatar">
            </Column>
            <Column class="column__ct_10">
                <Column class="column__ct_12 content">
                    <Column class="column__ct_12 ">
                        <span class="field username">{{ comment.user.name }}</span>
                        <span class="field time">{{ gethtime(post.timestamp) }}</span>
                        <template v-if="loggedIn && comment.user.id == currentUserId">
                            <CommentMenu v-on:emit-event="handleEmitEvent" />
                        </template>
                    </Column>                
                    <Column class="column__ct_12 ">
                        <template v-if="editable">
                            <p v-text="content" contenteditable="true" @blur="handleInput"></p>
                            <button class="submit" v-on:click="save">Save</button>
                        </template>
                        <template v-else>
                            <p>{{ content }}</p>
                        </template>
                    </Column>                                     
                </Column>
            </Column>
        </Row>
        
    </div>
</template>
<script>
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'
import CommentMenu from '@/components/Social/CommentMenu'
import { store, mutations } from '@/store';

export default {
    name: 'Comment',
    props: ['comment', 'post'],
    components: {
       Column,
       Row,
       CommentMenu
    },
    methods: {
        handleEmitEvent: function(ev) {
            console.debug('handlingEmitEvent in Comment component: ');
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
            console.debug('editing comment: ', this.comment.id);
            this.editable = true;
        },
        delete: function() {
            console.debug('deleting comment: ', this.comment.id);
            mutations.deleteComment(this.post.id, this.comment.id);
            // confirm and then remove from dom
        },
        save: function() {
            this.editable = false;
            // get content from element and save it in 

            mutations.updateComment(this.post.id, this.comment.id, this.content);
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
    computed: {
      loggedIn() {
        return store.state.loggedIn;
      },
      currentUserId() {
        return mutations.getCurrentUser().id
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
    mounted(){            
        this.content = this.comment.content;
    }
}
</script>
<style scoped>
    .nf-item {
        
    }
    .nf-item.comment {
        box-shadow: none;
        float: left;
        width: 100%;
        padding: 0;
    } 

    .nf-item.comment .content {
        background: #f8f8f8;
        position: relative;
    }

    .nf-item /deep/ img {
        width: 45px;
        height: 45px;
    }

    .controls {
        top: 0;
        right: 0;
    }
</style>