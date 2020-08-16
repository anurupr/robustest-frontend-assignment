<!-- Layout Menu -->
<template>    
    <ul class="menu" :class="menuLayout">        
        <MenuItem v-for="item in urls" :key="item.name" :item="item" v-on:emit-event="handleEmitEvent" />
    </ul>    
</template>
<script>
import MenuItem from '@/components/Common/MenuItem.vue'

export default {
    name: 'Menu',
    props: ['urls', 'layout'],
    components: {
        MenuItem
    },
    data() {
        return {
            defaultLayout: 'vertical'
        }
    },
    computed: {
        menuLayout() {
            if(this.layout == undefined || this.layout === '') return this.defaultLayout;

            return this.layout;
        }
    },
    methods: {
        handleEmitEvent(ev) {
            console.log('handleEmitEvent', ev);
            this.$emit('emit-event', ev);
        }
    }
}
</script>
<style scoped>
    .menu.horizontal > li {
        display: inline;
    }

    ul.menu {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
    }

    ul.menu li {
        position: relative;
        margin: 0.25em;
        text-align: center;
    }

    ul.menu li a {
        display: block;
        padding: 0.55em 1em;
        text-decoration: none;
        color: #d9d9d9;
        border-radius: 0.35em;
        background-color: rgba(33, 37, 41, 0.25);
        transition: all 200ms ease;
    
    }

    ul.menu li /deep/  a {        
       padding: .25rem;
       border-radius: 5px;       
       display: inline-block;
       width: 100%;
       font-size: 1.5rem;
    }

    ul.menu li /deep/ a:hover {
        background-color: #eee;
    }
    ul.menu li a.active {
        background-color: rgba(33, 37, 41, 0.45);
    }
    ul.menu li /deep/ ul {
        padding: .25rem;
    }

    ul.menu li ul li a {
        background-color: transparent;
    }
</style>
