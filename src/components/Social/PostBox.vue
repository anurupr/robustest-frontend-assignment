<template>
    <TextBox :pholder="pholder" v-on:emitChanges="receiveChanges ($event)">
        <button class="submit" v-on:click="addPost">Post</button>
    </TextBox>
</template>
<script>
const TextBox = () => import('@/components/Common/TextBox')
import { mutations } from '@/store';
import { getutime } from '@/utils';
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
                    timestamp: getutime(),
                    comments: []      
                }
                mutations.addPost(post);
            } else {
                console.error('content = ""')
                // show error msg
            }
        },
        receiveChanges: function(data) {
            this.content = data            
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