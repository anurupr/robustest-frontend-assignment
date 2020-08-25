<template>
    <div class="box text__box">
        <Row>
            <Column class="column__ct_1 column__xs__ct_2 avatar">
                <img :src="user.gravatar" >
            </Column>
            <Column class="column__ct_10 column__xs__ct_10">
                <Column class="column__ct_11 column__xs__ct_9 textbox__container">
                    <textarea v-model="content" :placeholder="pholder" @change="emitChanges ()" ></textarea>
                </Column>
                <Column class="column__ct_1 column__xs__ct_3 submit__container">
                    <slot></slot>
                </Column>
            </Column>
        </Row>
    </div>
</template>
<script>
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'
import { mutations } from '@/store'

export default {
    name: 'Box',
    props: ['pholder'],    
    components: {
        Column,
        Row
    },
    methods: {
        emitChanges () {
            this.$emit("emitChanges", this.content)
            this.content = "";
        }
    },
    data()  {
        return {             
            content: "",
            user: mutations.getCurrentUser()
        }
    }
}
</script>
<style scoped>
    .avatar img {
        border-radius: 150px;
        border: 1px solid #aaa;
        /* box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2); */
        width: 45px;
        height: 45px;
    }

    .avatar {
        max-width: 60px;
        padding-right: 0;
        height: 60px;        
    }

    .text__box .row,
    .avatar {
        display: flex;
    }

    .text__box {
        margin: 1rem 0;
    }

    .text__box textarea {
        outline: none;
        border: 1px solid #aaa;
        resize: none;   
        width: 100%; 
        font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif;
        font-size: 1.5rem;
        padding: .5rem;  
        height: auto;
        background: white;    
        max-height: 45px;  
    }


    .text__box .textbox__container {
        padding: 0 1rem;
    }
    

    .text__box .submit__container {
        padding: 0px;
    }

    .text__box textarea,
    .text__box .submit {
        float: left;
    }


    @media screen and (max-width: 576px) {       
    }
</style>
