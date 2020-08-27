<template>
    <Modal ref="modal">
        <form class="login" action="/login" method="POST" @submit="submit" >
            <h3>Login to your account</h3>
            <Column class="column__ct_12">
                <input ref="username" v-model="username" autofocus type="text" name="username" placeholder="Username" required>
            </Column>
            <Column class="column__ct_12">
                <input v-model="password" type="password" name="password" placeholder="Password" required>
            </Column>
            <Column class="column__ct_12">
                <input type="submit" value="Login">
            </Column>
        </form>
    </Modal>
</template>
<script>
const Modal = () => import('@/components/Common/Modal')
const Column = () => import('@/components/Common/Column')
import { store } from '@/store'
import { bus } from '../../bus'
export default {
    name: 'Login',
    components: {
        Modal,
        Column
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        focusInput() {
            this.$refs.username.focus();
            
        },
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
            this.$nextTick(function () {
              this.focusInput();
            })           
        },
        hideLoginForm() {
            this.$refs.modal.hideModal();
        }
    }
}
</script>
<style scoped>
    form.login {
        background: #fff;
        padding: 2rem;
        min-height: 30rem;
        max-width: 30rem;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 0px 0px 9px -3px #000;
    }

    form.login input {
        width: 100%;
    }

    form.login input[type="text"],
    form.login input[type="password"] {
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

    form.login input[type="submit"] {
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