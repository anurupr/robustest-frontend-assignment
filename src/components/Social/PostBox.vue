<template>
    <div class="box post__box">
        <Row>
                <Column class="column__ct_1 avatar">
                    <img src="https://www.gravatar.com/avatar/3f3fd2973e4d5ef103ce6d8d17bfa1b2?s=150&d=robohash&r=PG'" >
                </Column>
                <Column class="column__ct_10">
                    <Column class="column__ct_11">
                        <textarea></textarea>
                    </Column>
                    <Column class="column__ct_1 submit__container">
                        <button class="submit">Send</button>
                    </Column>
                </Column>
        </Row>
    </div>
</template>
<script>
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'
export default {
    name: 'PostBox',
    components: {
        Column,
        Row
    }
}
</script>
<style scoped>
    .avatar img {
        border-radius: 150px;
        border: 1px solid #aaa;
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2);
        width: 45px;
        height: 45px;
    }

    .avatar {
        max-width: 60px;
        padding-right: 0;
        height: 60px;
        
    }

    .post__box .row,
    .avatar {
        display: flex;
    }

    .post__box {
        margin-bottom: 1rem;
    }

    .post__box textarea {
        outline: none;
        border: 1px solid #aaa;
        resize: none;   
        width: 100%;       
    }

    .post__box .submit {
        width: 100%;
        border: 1px solid #aaa;
        padding: 0.5rem;
        border-radius: 5px;
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2);
        background: #83aed2;
        color: white;
        font-size: 15px;
        line-height: 20px;
        font-weight: bolder;
        cursor: pointer;
    }

    .post__box .submit__container {
        padding: 0px;
    }

    .post__box textarea,
    .post__box .submit {
        float: left;
    }
</style>

