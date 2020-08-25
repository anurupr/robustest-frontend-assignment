<template>
    <li class="menuitem">
            <template v-if="item.children">
                <a 
                  :href="item.url" 
                  :title="item.name" 
                  @click="onParentClick($event)" 

                  v-bind:class="[{ active }, item.cl]">
                  {{ item.name }}
                </a>
                <div :class="{ isOpen }" class="dropdown">
                    <ul>
                        <li 
                          v-for="{ url, name, cl, icon, index, event, target, cond, condValue } in item.children" 
                          :key="index"> 
                          <template v-if="isVisible({ cond, condValue })">
                            <a :class="cl" :href="url" :title="name" :target="target" @click="onClick(event, $event)"><FontAwesomeIcon :icon="icon" /><span>{{ name }}</span></a>
                           </template>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-else>
                <template v-if="isVisible()">
                    <a
                    @click="onClick(item.event, $event)" 
                    :href="item.url" 
                    :title="item.name">
                    <FontAwesomeIcon :icon="item.icon" />
                    <span>{{ item.name }}</span></a>
                </template>
            </template>
    </li>    
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from '@/store'
import { bus } from '../../main'
library.add(faEdit, faTrash, faSignInAlt, faSignOutAlt)
export default {
    name: 'MenuItem',
    props: ['item'],
    components: {
        FontAwesomeIcon
    },
    data() {
        console.log('store.state', store.state);
        console.log('store.state[this.item.cond] == this.item.condValue', this.item.cond, store.state[this.item.cond], this.item.condValue, store.state[this.item.cond] == this.item.condValue);
        return {            
            isOpen: false,
            active: false,            
        }
    },
    computed: {
        name() {
            return this.item.name
        }       
        
    },
    methods: {
        onParentClick: function(e) {
            this.isOpen = !this.isOpen;
            this.active = !this.active;
            e.preventDefault();
        },
        onClick: function(event, e)  {
            console.log('onClick', event);
            this.$emit("emit-event", event);
            this.isOpen = false;
            e.preventDefault()
        },
        isVisible(item) {
            if (typeof item === 'undefined')
                item = this.item

            return store.state[item.cond] == item.condValue 
        }
    },
    // not essential, but can be used for debugging
    created() {    
        bus.$on('login-change', function(d) {
            console.log('login-change d', d);            
            console.log('login-change isVisible', this.name, this.isVisible);
            console.log('login-change store.state.loggedIn', store.state.loggedIn);
        })
    }
}
</script>
<style scoped>
    .menuitem a > span,
    .dropdown /deep/ a > span {
        display: inline-block;
        text-indent: 5px;
    }
    
    .menuitem > a.dot:after {
        content: '\2807';
        font-size: 25px;
        padding-left: 8px;
    } 

    .menuitem > a.hamburger:after {
        content: '\2261';
        font-size: 25px;
        padding-left: 8px;
    }

    .dropdown ul {
        text-align: left;
    }

    .dropdown li {
        padding: .25em;
    }

    .dropdown {
        position: absolute;
        left: 50%;
        transform: translatex(-50%) rotatex(90deg) scale(0);
        margin-top: 0.55em;
        transform-origin: 0 0;
        border-radius: 0.35em;
        background-color: #f5f5f5;
        visibility: hidden;
        opacity: 0;
        transition: all 200ms linear;
        z-index: 9999;
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2);
        min-width: 5em;
    }

    .dropdown.isOpen {
        transform: translatex(-50%);
        visibility: visible;
        opacity: 1;
    }

</style>