<!-- Nav Menu -->
<template>
    <Menu :urls="urls" v-on:emit-event="handleEmitEvent"  />    
</template>
<script>
import Menu from '@/components/Common/Menu.vue'
import { bus } from '../../main'
export default {
    name: 'NavMenu',
    components: {
        Menu
    },
    methods: {
        handleEmitEvent: function(ev) {
            console.debug('handlingEmitEvent in PostMenu component: ', ev);
            switch(ev){
                case 'login':
                    bus.$emit('start-login', true);
                    break;
                case 'logout':
                    bus.$emit('start-logout', true);
                    break;
                default: break;
            }
            
        }
    },    
    data() {
        return {
            urls: [
                {
                            url: "#",
                            name: "Login",
                            target: "",
                            cl: "user-login",
                            icon: "sign-in-alt",
                            event: "login",
                            cond: "loggedIn",
                            condValue: false
                        },
                        {
                            url: "#",
                            name: "Logout",
                            target: "",
                            cl: "user-logout",
                            icon: "sign-out-alt",
                            event: "logout",
                            cond: "loggedIn",
                            condValue: true
                        }
            ]
        }
    }
    
}
</script>
<style scoped>
    
</style>
