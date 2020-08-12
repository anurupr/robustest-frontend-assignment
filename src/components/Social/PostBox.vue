<template>
    <TextBox :pholder="pholder" :content="content">
        <button class="submit" v-on:click="addPost">Post</button>
    </TextBox>
</template>
<script>
import TextBox from '@/components/Common/TextBox'
import { mutations } from '@/store';
var moment = require('moment');
export default {
    name: 'PostBox',
    components: {
        TextBox
    },
    methods: {
        addPost: function() {
            if (this.content != "") {
                var post = {
                    id: mutations.getLatestPostId(),
                    content: this.content,
                    user : mutations.getCurrentUser(),
                    timestamp: moment().fromNow()            
                }
                mutations.addPost(post);
            } else {
                // show error msg
            }
        }
    },
    data()  {
        return {             
            pholder: "What's going on?",
            content: ""
        }
    }
}
</script>
<style scoped>
.text__box .submit {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    background: #33a2ff;
    color: white;
    font-size: 15px;
    line-height: 20px;
    font-weight: bolder;
    cursor: pointer;        
}
</style>