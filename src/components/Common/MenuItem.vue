<template>
    <li class="menuitem">
            <template v-if="item.children">
                <a 
                  :href="item.url" 
                  :title="item.name" 
                  @click="isOpen = !isOpen, active = !active" 
                  :class="{ active }">
                  {{ item.name }}
                </a>
                <div :class="{ isOpen }" class="dropdown">
                    <ul>
                        <li 
                          v-for="{ url, name, cl, icon, index, event, target } in item.children" 
                          :key="index">                            
                            <a :class="cl" :href="url" :title="name" :target="target" @click="onClick(event)"><FontAwesomeIcon :icon="icon" /><span>{{ name }}</span></a>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-else>
                <a 
                  :href="item.url" 
                  :title="item.name">{{ item.name }}</a>
            </template>
    </li>    
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEdit, faTrash)
export default {
    name: 'MenuItem',
    props: ['item'],
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            isOpen: false,
            active: false,
        }
    },
    methods: {
        onClick: function(event)  {
            console.log('onClick', event);
            this.$emit("emit-event", event);
            this.isOpen = false;
        }
    }
}
</script>
<style scoped>
    .dropdown /deep/ a > span {
        display: inline-block;
        text-indent: 5px;
    }
    .menuitem > a:after {
        content: '\2807';
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