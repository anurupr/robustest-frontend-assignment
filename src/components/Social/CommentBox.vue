<template>
    <TextBox :pholder="pholder" v-on:emitChanges="receiveChanges ($event)">
        <button class="submit" v-on:click="addComment">Comment</button>
    </TextBox>
</template>
<script>
const TextBox = () => import('@/components/Common/TextBox')
import { mutations } from '@/store';
import { getutime } from '@/utils';
export default {
    name: 'CommentBox',
    props: [ 'postId' ],
    components: {
        TextBox
    },
    methods: {
        addComment: function() {
            if (this.content != "") {
                var comment = {
                    id: mutations.getLatestCommentIdForPost(this.postId),
                    content: this.content,
                    user : mutations.getCurrentUser(),
                    timestamp: getutime()            
                }
                mutations.addComment(this.postId, comment);
            } else {
                // show error msg
            }
        },
        receiveChanges: function(data) {
            this.content = data            
        }
    },
    data()  {
        return {             
            pholder: "Write a comment",
            content: ""
        }
    }
}
</script>
<style scoped>
.box {
    box-shadow: none;
}

.text__box {
    margin: 0;
    padding: 0;
}


.text__box .submit {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    /* background: #33a2ff; */
    background: #65afec;
    color: white;
    font-size: 10px;
    line-height: 15px;
    font-weight: bolder;
    cursor: pointer;        
}

/* since text__box is used in parent components, its not able to find the right textarea for this component 
   using the /deep/ selector solves this issue */

.text__box /deep/ textarea {  
    
    background: #f6f6f6;
}

</style>
