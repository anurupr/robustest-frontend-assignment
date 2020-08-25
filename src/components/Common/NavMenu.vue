<!-- Nav Menu -->
<template>
    <nav>
        <Menu :urls="urls" :cl="regularClass" v-on:emit-event="handleEmitEvent"  />
        <Menu :urls="rurls" :cl="respClass" v-on:emit-event="handleEmitEvent"  />        
    </nav>
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
            regularClass: "regular",
            respClass: "responsive",
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
    },
    computed: {
        
            rurls() {
                return  [
                    {
                        url: "#",
                        name: "",
                        cl: "hamburger",
                        children: this.urls
                    }
                ]
            }
        
    }
    
}
</script>
<style scoped>
    nav { width: 100% }
    nav  > * {
        float: right;
    }
</style>
