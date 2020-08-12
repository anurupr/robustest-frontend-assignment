<template>
    <TextBox :pholder="pholder" v-on:emitChanges="receiveChanges ($event)">
        <button class="submit" v-on:click="addComment">Comment</button>
    </TextBox>
</template>
<script>
import TextBox from '@/components/Common/TextBox'
import { mutations } from '@/store';
var moment = require('moment');
export default {
    name: 'CommentBox',
    props: [ 'postId' ],
    components: {
        TextBox
    },
    methods: {
        addComment: function() {
            console.log('content', this.content);
            if (this.content != "") {
                var comment = {
                    id: mutations.getLatestCommentIdForPost(this.postId),
                    content: this.content,
                    user : mutations.getCurrentUser(),
                    timestamp: moment().fromNow()            
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
            pholder: "Comment on this post",
            content: ""
        }
    }
}
</script>
<style scoped>
.box {
    box-shadow: none;
}
.text__box .submit {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    background: #33a2ff;
    color: white;
    font-size: 10px;
    line-height: 15px;
    font-weight: bolder;
    cursor: pointer;        
}

/* since text__box is used in parent components, its not able to find the right textarea for this component 
   using the /deep/ selector solves this issue */

.text__box /deep/ textarea {
    height: 30px;
    background: #f6f6f6;
}
</style>
