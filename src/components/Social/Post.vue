<template>
    <div class="box nf-item">
        <Row>
            <Column class="column__ct_1 avatar">
                <img :src="post.user.gravatar">
            </Column>
            <Column class="column__ct_10">
                <span class="field username">{{ post.user.username }}</span>
                <span class="field time">{{ post.timestamp }}</span>
            </Column>
        </Row>
        <Row>
            <Column class="column__ct_12">
                <p>{{post.content}}</p>
            </Column>
        </Row>
        <Row>
            <Column class="column__ct_12">
                <CommentBox :postId="post.id" />
            </Column>
        </Row>
        <Row>
            <Column class="column__ct_12">
                <Comment v-for="comment in post.comments" :key="comment.id" :comment="comment"></Comment>
            </Column>
        </Row>
    </div>
</template>
<script>
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'
import Comment from '@/components/Social/Comment'
import CommentBox from '@/components/Social/CommentBox'
export default {
    name: 'Post',
    props: ['post'],
    components: {        
        Column,
        Row,
        Comment,
        CommentBox
    }
}
</script>
<style scoped> 
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
        max-width: 80px;
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
</style>