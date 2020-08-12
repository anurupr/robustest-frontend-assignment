<template>
    <div class="box nf-item comment">
        <Row>
            <Column class="column__ct_1 avatar">
                <img :src="comment.user.gravatar">
            </Column>
            <Column class="column__ct_10">
                <Column class="column__ct_12 content">
                    <Column class="column__ct_12 ">
                        <span class="field username">{{ comment.user.username }}</span>
                        <span class="field time">{{ comment.timestamp }}</span>
                    </Column>                
                    <Column class="column__ct_12 ">
                        <p>{{comment.content}}</p>
                    </Column>                
                </Column>
            </Column>
        </Row> 
    </div>
</template>
<script>
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'

export default {
    name: 'Comment',
    props: ['comment'],
    components: {
       Column,
       Row    
    }
}
</script>
<style scoped>
    .nf-item.comment {
        box-shadow: none;
    } 
    
    .nf-item.comment {
        float: left;
        width: 100%;
    }

    .nf-item.comment .content {
        background: #f8f8f8;
    }

    .nf-item /deep/ img {
        width: 45px;
        height: 45px;
    }
</style>