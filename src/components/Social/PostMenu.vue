<template>
    <Menu :urls="urls" :cl="cl" v-on:emit-event="handleEmitEvent" />
</template>
<script>
import Menu from '@/components/Common/Menu'
export default {
    name: 'PostMenu',
    components: {
        Menu
    },
    methods: {
        handleEmitEvent: function(ev) {
            console.debug('handlingEmitEvent in PostMenu component: ', ev);
            this.$emit('emit-event', ev);
        }
    },
    data() {
        return {   
            cl: "floating",         
            urls: [
                {
                    url: "#",
                    name: "",
                    cl: "dot",
                    children: [
                        {
                            url: "#",
                            name: "Edit",
                            target: "",
                            cl: "post-edit",
                            icon: "edit",
                            event: "edit"
                        },
                        {
                            url: "#",
                            name: "Delete",
                            target: "",
                            cl: "post-delete",
                            icon: "trash",
                            event: "delete"
                        }
                    ]
                }
            ]
        }
    }
}
</script>