<template>    
    <div class="modal" :style="{width: width +'px', height: height +'px', display: show? 'block': 'none'}">
        <slot></slot>
    </div>    
</template>
<script>
export default {
    name: 'Modal',
    data() {
        return {
            show: false,
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    methods: {
        showModal() {
            this.show = true
        },
        hideModal() {
            this.show = false
        }
    }
}
</script>
<style scoped>
    .modal {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        background: rgba(0,0,0,0.4);
        z-index: 99999;
        padding: 2rem;
    }
</style>