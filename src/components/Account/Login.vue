<template>
    <Modal ref="modal">
        <form action="/login" method="POST" @submit="submit" >
            <input v-model="username" type="text" name="username" placeholder="Username" required>
            <input v-model="password" type="password" name="password" placeholder="Password" required>
            <input type="submit" value="Login">
        </form>
    </Modal>
</template>
<script>
import Modal from '@/components/Common/Modal'
import { store } from '@/store'
import { bus } from '../../main'
export default {
    name: 'Login',
    components: {
        Modal
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        validate() {
            return this.username.length > 0 && this.password.length > 0;
        },
        submit(e) {
            if (this.validate()) {
                // static check
                if (this.username == "test" && this.password == "test") {
                    store.state.loggedIn = true;
                    this.hideLoginForm();
                    bus.$emit('login-change', true);

                }
            }
            e.preventDefault();
        },
        showLoginForm() {
            this.$refs.modal.showModal();
        },
        hideLoginForm() {
            this.$refs.modal.hideModal();
        }
    }
}
</script>
<style scoped>
    form {
        background: #fff;
        padding: 2rem;
        min-height: 30rem;
        max-width: 30rem;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 0px 0px 9px -3px #000;
    }

    form > input[type="text"],
    form > input[type="password"] {
        border: 0;
        border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width: 0px;
        border-bottom: 2px solid #ccc;
        line-height: 25px;
        padding: 0 .5rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    form > input[type="submit"] {
        border-radius: 5px;
        background: #33a2ff;
        color: white;
        font-size: 15px;
        line-height: 20px;
        font-weight: bolder;
        cursor: pointer;
        border: 0;
        box-shadow: 0px 0px 15px -10px #000;
        padding: 1rem 2rem; 
        margin-top: 2rem;
    }
</style>